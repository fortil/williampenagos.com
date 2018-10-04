import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyle } from '../src/withAll'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

class SkillsPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify={'center'} spacing={16}>
        <Grid item md={7}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="William Penagos"
                className={classes.media}
                // height="auto"
                image="/static/images/javascript_frameworks.png"
                title="William Penagos"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={5}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography gutterBottom variant="headline" component="h2">
                  Some skills are:
                </Typography>
                <Typography component="p">
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

SkillsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => {
  return {
    card: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        maxWidth: 600,
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: '100%',
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

export default withStyle(styles)(SkillsPage)
