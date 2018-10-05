import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyle } from '../src/withAll'
import Card from '@material-ui/core/Card'
// import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'

const skills = [
  {
    name: 'React',
    points: 9,
  },
  {
    name: 'Angular',
    points: 6,
  },
  {
    name: 'Vue',
    points: 8,
  },
  {
    name: 'VanillaJS',
    points: 8,
  },
  {
    name: 'Express',
    points: 7,
  },
  {
    name: 'NodeJS',
    points: 7,
  },
  {
    name: 'Service Workers',
    points: 7,
  },
  {
    name: 'Next.js',
    points: 8,
  },
  {
    name: 'Nuxt.js',
    points: 8,
  },
  {
    name: 'React Native',
    points: 6,
  },
  {
    name: 'Rxjs',
    points: 4,
  },
  {
    name: 'HTML5',
    points: 7,
  },
  {
    name: 'Firebase',
    points: 7,
  },
  {
    name: 'Loopback',
    points: 5,
  },
  {
    name: 'Redux',
    points: 8,
  },
  {
    name: 'Redux-thunk',
    points: 8,
  },
  {
    name: 'Mongoose',
    points: 6,
  },
  {
    name: 'AWS',
    points: 5,
  },
  {
    name: 'Google Cloud',
    points: 5,
  },
]

class SkillsPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify={'center'} spacing={16}>
        <Grid item md={12}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              alt="William Penagos"
              className={classes.media}
              // height="auto"
              image="/static/images/javascript_frameworks.png"
              title="William Penagos"
            />
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography gutterBottom variant="headline" component="h2">
                Some skills are:
              </Typography>
              <Grid container spacing={16}>
                {
                  skills.map((skill, i) => (
                    <Grid item key={i} xs md={4}>
                      <Typography gutterBottom variant="headline" component="h2">
                        {skill.name}
                      </Typography>
                      <Typography gutterBottom variant="caption" component="p">
                        {skill.points}/10
                      </Typography>
                      <LinearProgress color={i % 2 === 0 ? 'secondary' : 'primary'} variant="determinate" value={skill.points * 10} />
                    </Grid>
                  ))
                }
              </Grid>
            </CardContent>
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
        height: 200,
      },
      [theme.breakpoints.up('sm')]: {
        height: 300,
      },
      [theme.breakpoints.up('md')]: {
        height: 400,
      },
    },
  }
};

export default withStyle(styles)(SkillsPage)
