import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { SITE_NAME } from '../config'
import JssProvider from 'react-jss/lib/JssProvider'
import flush from 'styled-jsx/server'
import getPageContext from '../src/getPageContext'

class WillDocument extends Document {
  render () {
    const { pageContext } = this.props

    return (
      <html lang='es' dir='ltr'>
        <Head>
          <title>{SITE_NAME}</title>
          <meta charSet='utf-8' />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name='viewport'
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          <link rel='manifest' href='/manifest.json' />
          <link rel='icon' href={'/favicono.png'} sizes='16x16' type='image/png' />
          {/* PWA primary color */}
          <meta name='theme-color' content={pageContext.theme.palette.primary.main} />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
          <style>{`* {font-family: Roboto}, body {background-color: white !important}`}</style>
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
          <script type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker
                  .register('/sw.js')
                  .then(registration => {
                    window['registration'] = registration
                    console.log('service worker registration successful', registration)
                  })
                  .catch(err => {
                    console.warn('service worker registration failed', err.message)
                  })
              }
              `,
            }}
          />
        </body>
      </html>
    )
  }
}

WillDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Get the context of the page to collected side effects.
  const pageContext = getPageContext()
  const page = ctx.renderPage(Component => props => (
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      <Component pageContext={pageContext} {...props} />
    </JssProvider>
  ))

  return {
    ...page,
    pageContext,
    styles: (
      <React.Fragment>
        <style
          id='jss-server-side'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        {flush() || null}
      </React.Fragment>
    )
  }
}

export default WillDocument
