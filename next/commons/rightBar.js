import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography';
// import Hidden from '@material-ui/core/Hidden';
import { withStyle } from '../src/withAll'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { ListBar } from '../commons/tileData';

class RightBar extends Component {
  state = {
    mobileOpen: false,
  };
  handleDrawerToggle = () => {
    if (!['xl', 'lg', 'md'].includes(this.props.width)) {
      this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    }
  };

  capitalizeRoute = () => {
    const name = this.props.router.pathname.replace('/', '')
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  render() {
    const { classes, theme } = this.props
    const drawer = (
      <div style={{ minHeight: '100vh', height: '100%' }}>
        <List>
          <ListItem>
            <Card className={classes.card}>
              <CardContent style={{ padding: 10 }}>
                <h1>William Penagos</h1>
                <span>Full Stack Developer</span>
              </CardContent>
            </Card>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListBar {...this.props} handleDrawerToggle={this.handleDrawerToggle} />
        </List>
      </div>
    );

    return (
      <div className={classes.bar}>
        {/* <Hidden mdUp> */}
        <AppBar className={classes.appBar} color={'default'} position={`static`}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {this.capitalizeRoute()}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={this.state.mobileOpen}
          onClose={this.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaperMobile,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
        {/* </Hidden> */}
        {/* <Hidden smDown> */}
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
        {/* </Hidden> */}
      </div>
    )
  }
}

RightBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

const drawerWidth = 240;
const styles = theme => ({
  bar: {
    maxWidth: `${drawerWidth}px`,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaperMobile: {
    // [theme.breakpoints.down('md')]: {
    //   position: 'relative',
    // },
    // [theme.breakpoints.up('md')]: {
    //   display: 'none',
    // },
  },
  drawerPaper: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      position: 'relative',
    },
  },
  appBar: {
    position: 'absolute',
    // marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  card: {
    boxShadow: 'none',
    width: '100%',
    '& h1': {
      fontSize: 31,
      fontWeight: 100,
    },
    '& span': {
      fontSize: 14,
      fontWeight: 300,
    },
  }
});

export default withStyle(styles, { name: 'rightBar', withTheme: true })(RightBar)