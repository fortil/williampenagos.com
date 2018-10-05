import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyle } from '../src/withAll'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

const contacts = [
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/fortil',
  },
  {
    name: 'E-Mail',
    icon: 'email',
    link: 'billalpeza@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/william-penagos-zambrano-67262911b',
  },
  {
    name: 'Skype',
    icon: 'skype',
    link: 'wialpeza',
  },
]

class ContactMe extends Component {
  goTo = go => () => {
    if ('wialpeza' === go) {
      window.location.href = `skype:${go}?chat`
    } else if (/@/g.test(go)) {
      window.location.href = `mailto:${go}`
    } else {
      window.open(go, '_blank')
    }
  }
  
  render() {
    const { classes } = this.props;
    return (
      <Grid container alignItems={'center'} justify={'center'} direction={'row'} spacing={40} style={{ minHeight: 'calc(100vh - 50px)', height: '100%' }}>
        {contacts.map((c, i) => (
          <Grid item key={i}>
            <Card className={classes.card} onClick={this.goTo(c.link)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="William Penagos"
                  className={classes.media}
                  // height="400"
                  image={`/static/images/network/${c.icon}.png`}
                  title="William Penagos"
                />
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography gutterBottom variant="headline" component="h2">
                    {c.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

ContactMe.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => {
  return {
    card: {
      width: 250
    },
    media: {
      objectFit: 'cover',
      width: '100%',
      height: 150,
      // [theme.breakpoints.down('sm')]: {
      //   height: 200,
      // },
      // [theme.breakpoints.up('sm')]: {
      // },
      // [theme.breakpoints.up('md')]: {
      //   height: 140,
      // },
    },
  }
};

export default withStyle(styles)(ContactMe)
