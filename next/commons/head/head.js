import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withAll } from '../../src/withAll'
import { SITE_NAME } from '../../config'

const drawerWidth = 240

const styles = theme => ({
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'appBarShift-left': {
    marginLeft: drawerWidth
  },
  'appBarShift-right': {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  }
})

class Header extends Component {
  render () {
    const { classes, open, anchor, handleDrawerOpen } = this.props

    return (
      <AppBar
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
          [classes[`appBarShift-${anchor}`]]: open
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='title' color='inherit' noWrap>
            {SITE_NAME}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  anchor: PropTypes.any.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired
}

Header.defaultProps = {
  open: false,
  anchor: 'left',
  handleDrawerOpen: () => 0
}

export default withAll(styles, { withTheme: true })(Header)
