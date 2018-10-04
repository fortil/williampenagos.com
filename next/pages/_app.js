import App, { Container } from 'next/app'
import React from 'react'
import PropTypes from 'prop-types'
import withReduxStore from '../redux/with-redux'
import { Provider } from 'react-redux'
import getPageContext from '../src/getPageContext'
import { withAll } from '../src/withAll'
import RightBar from '../commons/rightBar'
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider'

const drawerWidth = 240;

class MainApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { classes, Component, pageProps, reduxStore } = this.props;
    const props = { ...this.props }
    delete props.classes
    return (
      <Container>
        <Provider store={reduxStore}>
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              <CssBaseline />
              <div className={classes.root}>
                <RightBar {...props} />
                <main className={classes.content}>
                  <div className={[classes.toolbar, classes.toolbarResponsive].join(' ')} />
                  <Component pageContext={this.pageContext} {...pageProps} />
                </main>
              </div>
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    );
  }
}

MainApp.propTypes = {
  classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  toolbarResponsive: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    // height: '100%'
  },
});

export default withReduxStore(
  withAll(styles)(MainApp)
)
