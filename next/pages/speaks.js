import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyle } from '../src/withAll'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import LinkIcon from '@material-ui/icons/Link'
import Tooltip from '@material-ui/core/Tooltip'

const experiences = [
  {
    img: '/static/images/speaks/devfest.png',
    alt: 'DevFest Cali',
    title: 'DevFest Cali 2018 - USC',
    link: 'https://devfest.gdgcali.com/schedule/2018-09-29?sessionId=112',
    content: 'Organicer and Speaker about React 360',
  },
  {
    img: '/static/images/speaks/devfest.png',
    alt: 'DevFest Lima 2017',
    title: 'DevFest Lima 2017',
    link: 'https://devfestlima.com/previous-speakers/william_penagos/',
    content: 'I was talking about Service Workers and Firebase web',
  },
  {
    img: '/static/images/speaks/meetup.png',
    alt: 'Sails with JWT',
    title: 'Sails with JWT - CaliJS',
    link: 'https://www.meetup.com/CaliJS/events/240824843/',
    content: 'I was talking about Sails framework and your integration with JWT',
  },
  {
    img: '/static/images/speaks/gdg.png',
    alt: 'VueJS a progressive framework',
    title: 'VueJS a progressive framework',
    link: 'https://www.meetup.com/GDGCali/events/249109057/',
    content: 'I was talking about Vue like as progressive framework',
  },
  {
    img: '/static/images/speaks/gdg.png',
    alt: 'PWA',
    title: 'PWA - Progressive Web Apps',
    link: 'https://www.meetup.com/GDGCali/events/244315024/',
    content: 'I was talking about the Progressive Web Apps, your features and advantages.',
  },
  {
    img: '/static/images/speaks/gdg.png',
    alt: 'Push Notifications',
    title: 'Push Notifications - With Firebase',
    link: 'https://www.meetup.com/GDGCali/events/240408701/',
    content: 'I was talking about how to implement the Push Notifications with firebase.',
  },
  {
    img: '/static/images/speaks/meetup.png',
    alt: 'Observables',
    title: 'Observables - CaliJS',
    link: 'https://www.meetup.com/CaliJS/events/250995187/',
    content: 'I was talking about Observables tech.',
  },
  {
    img: '/static/images/speaks/gdg.png',
    alt: 'Service Workers',
    title: 'Service Workers',
    link: 'https://www.meetup.com/GDGCali/events/247528042/',
    content: 'I was talking about Service Workers and your implementation.',
  },
  {
    img: '/static/images/speaks/meetup.png',
    alt: 'Best Practices',
    title: 'Best Practices - CaliJS',
    link: 'https://www.meetup.com/CaliJS/events/248066112/',
    content: 'I was talking about the best practices in JavaScript.',
  },
  {
    img: '/static/images/speaks/meetup.png',
    alt: 'Nuxt a Vue framework',
    title: 'Nuxt a Vue framework - CaliJS',
    link: 'https://www.meetup.com/CaliJS/events/240194265/',
    content: 'I was talking about Nuxt and your structure.',
  },
]

class Speaks extends Component {
  goTo = link => () => {
    window.open(link, '_blank')
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography gutterBottom variant="headline" component="h2">
          Some papers that I have done
        </Typography>
        </div>
        <div className={classes.contenedor}>
          {experiences.map((exp, i) => (
            <div className={classes.item} key={i}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt={exp.alt}
                  className={classes.media}
                  image={exp.img}
                  title={exp.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    {exp.title}
                  </Typography>
                  <Typography component="p">
                    {exp.content}
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <Tooltip title={`Watch the ${exp.alt} event`}>
                    <IconButton aria-label="Link" onClick={this.goTo(exp.link)}>
                      <LinkIcon />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Speaks.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => {
  return {
    card: {
      width: '100%',
    },
    media: {
      objectFit: 'cover',
      width: '100%',
      maxHeight: 200,
      height: 'auto'
    },
    contenedor: {
      display: 'flex',
      flexFlow: 'column wrap',
      maxWidth: '100%',
      [theme.breakpoints.down('sm')]: {
        height: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        height: '1900px',
      },
      [theme.breakpoints.up('md')]: {
        height: '1400px',
      },
    },
    item: {
      // flex: '1 0 auto',
      // overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: '45%',
      },
      [theme.breakpoints.up('md')]: {
        width: '33%',
      },
      marginTop: 15,
      marginRight: 10,
    },
  }
};

export default withStyle(styles)(Speaks)
