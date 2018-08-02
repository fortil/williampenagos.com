import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Icon from '@material-ui/core/Icon'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
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
})

function SimpleList(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <List component='nav' >
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
      <List component='nav'>
        <ListItem>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>person</Icon>
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>trending_up</Icon>
          </ListItemIcon>
          <ListItemText primary='Experience' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>dvr</Icon>
          </ListItemIcon>
          <ListItemText primary='Projects' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>bar_chart</Icon>
          </ListItemIcon>
          <ListItemText primary='Skills' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>star</Icon>
          </ListItemIcon>
          <ListItemText primary='Awards' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>school</Icon>
          </ListItemIcon>
          <ListItemText primary='Education' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>mail</Icon>
          </ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon>description</Icon>
          </ListItemIcon>
          <ListItemText primary='Resume' />
        </ListItem>
      </List>
    </div>
  )
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleList)