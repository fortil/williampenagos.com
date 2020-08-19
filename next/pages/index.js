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
                I am System Engineer, a JavaScript FullStack developer and leader of a Google Developers Community group. I have been working with JavaScript for 9 years so I am very familiar with several frameworks within this programming language. Some of these frameworks include React, Angular, Vue, Node, Express, LoopBack, Sequelize, TyepScript, etc.
                </Typography>
                <Typography component="p" variant="subheading">
Right now I am responsible for overseeing and managing my team of developers. I love writing code and I’m comfortable with many developing processes like DevOps, Backend, and Front-end.
                </Typography>
                <Typography component="p" variant="subheading">
Specially I love the Progressive Web Apps and enjoy working on challenging projects that allow me to apply and learn new technologies every day.
                </Typography>
                <Typography component="p" variant="subheading">
In my experience I have worked with several international companies such as Sightlinemaps and Source Meridian. Currently, I am working on a USA Fintech Milo Credit where I am implementing new systems and infrastructures.
                </Typography>
                <Typography component="p" variant="subheading">
                  <code>updated 08/09/2019</code>
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
