import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyle } from '../src/withAll'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

class IndexHome extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify={'center'}>
        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="William Penagos"
                className={classes.media}
                // height="400"
                image="/static/images/background.jpg"
                title="William Penagos"
              />
              <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="p" variant="subheading">
                  Hello my name is
                </Typography>
                <Typography gutterBottom variant="headline" component="h2">
                  William Penagos
                </Typography>
                <Typography component="p" variant="subheading">
                I'm Web Development leader with more than 7 years of experience in JavaScript technologies. A passionate to the code and the communities of development, leader of the Cali GDG, React and Vue mentor.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

IndexHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => {
  return {
    card: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        maxWidth: 800,
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: 1000,
      },
    },
    media: {
      objectFit: 'cover',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        height: 400,
      },
      [theme.breakpoints.up('sm')]: {
        height: 500,
      },
      [theme.breakpoints.up('md')]: {
        height: 600,
      },
    },
  }
};

export default withStyle(styles)(IndexHome)
