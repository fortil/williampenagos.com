import App, { Container } from 'next/app'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { mailFolderListItems, otherMailFolderListItems } from '../components/tileData'
import { withStyle } from '../src/withAll'
import { Header } from '../commons/head'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux'
import withReduxStore from '../redux/with-redux'

class DrawerApp extends App {
  state = {
    open: false,
    anchor: 'left'
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value
    })
  }

  // static async getInitialProps({ Component, router, ctx }) {
  //   let pageProps = {}

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }

  //   return { pageProps, router }
  // }

  render () {
    const { classes, theme, Component, pageProps, reduxStore } = this.props
    const { anchor, open } = this.state
    const keysProp = Object.keys(this.props)
      .filter(k => k !== 'children' && k !== 'Component')
      .map(k => ({ [k]: this.props[k] }))
    const props = Object.assign({}, ...keysProp)

    const drawer = (
      <Drawer
        variant='persistent'
        anchor={anchor}
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </Drawer>
    )

    let before = null
    let after = null

    if (anchor === 'left') {
      before = drawer
    } else {
      after = drawer
    }

    const isErrorPage = this.props.pageProps && this.props.pageProps.statusCode && this.props.pageProps.statusCode !== 200

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Header handleDrawerOpen={this.handleDrawerOpen} open={open} anchor={anchor} />
          {before}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes.contentError]: isErrorPage,
              [classes[`contentShift-${anchor}`]]: open
            })}
          >
            <div className={classNames(
              { [classes.drawerHeader]: !isErrorPage }
            )} />
            <Container>
              <Provider store={reduxStore}>
                <Component {...pageProps} {...props} />
              </Provider>
              <Tooltip title='If you want to receive push notifications'>
                <Button variant='fab' color='secondary' className={classes.absolute}>
                  <FontAwesomeIcon icon={faBell} size='2x'/>
                </Button>
              </Tooltip>
            </Container>
          </main>
          {after}
        </div>
      </div>
    )
  }
}

DrawerApp.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  theme: PropTypes.object.isRequired
}

Drawer.defaultProps = {
  children: <span />
}

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    // height: '100vh',
    minHeight: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentError: {
    padding: '0px!important'
  },
  'content-left': {
    marginLeft: -drawerWidth
  },
  'content-right': {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    // marginLeft: 0
  },
  'contentShift-right': {
    marginRight: 0
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  }
})

export default withReduxStore(
  withStyle(styles, { withTheme: true })(DrawerApp)
)
