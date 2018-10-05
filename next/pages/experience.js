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

const experiences = [
  {
    img: '/static/images/projects/logo_certix.png',
    alt: 'Certix',
    title: 'Certix - Delete academic fraud with blockchain',
    link: 'https://certix.co',
    content: 'I worked with Angular, Rxjs, Mongoose, WebSockets, Passport, Express, Service Workers, TypeScript, etc.',
  },
  {
    img: '/static/images/projects/sightlinemaps.gif',
    alt: 'SightLine Maps',
    title: 'SightLine Maps - LiDAR Technologies',
    link: 'https://sightlinemaps.com',
    content: 'I worked with Python, Nodejs, AWS (Lambda, EC2, S3, ApiGateway, CloudFront, CloudWatch, RDS - Postgresql, etc), Serverless, React, Redux, Treejs, Potree, Service Workers, Auth0, Google Drive (extension integration), CircleCI, etc.',
  },
  {
    img: '/static/images/projects/gotlicks-logo.png',
    alt: 'GotLicks',
    title: 'GotLicks - Gigs schedule',
    link: 'http://www.gotlicks.com',
    content: 'I worked with Angular, Rxjs, Sequelize, Express, Service Workers, Googe Auth, TypeScript, Docker, Jenkins, etc.',
  },
  {
    img: '/static/images/projects/purplelab.png',
    alt: 'PurpleLab',
    title: 'PurpleLab - Agile Provider Profiling Platform',
    link: 'https://www.purplelab.com',
    content: 'I worked with AngularJS and Codeigniter in the backend side.',
  },
  {
    img: '/static/images/projects/chiper.png',
    alt: 'Chiper',
    title: 'Chiper - Platform to Sell',
    link: 'https://chiper.co',
    content: 'I worked with React, Redux, Admin On Rest, Sequelize, Loopback, GraphQL, Firebase, Pug, AWS (Lambda, EC2, S3), CircleCI, Docker, etc',
  },
  {
    img: '/static/images/projects/patravel.jpg',
    alt: 'PaTravel',
    title: 'PaTravel - Travel experts',
    link: 'http://www.patravel.com',
    content: 'I worked with Python and Nodejs in the backend side.',
  },
  {
    img: '/static/images/projects/progressus.png',
    alt: 'Progressus',
    title: 'Progressus - Psychology Platform',
    link: 'https://progressus.com.co',
    content: 'I worked with Firebase, Next, React, Material-ui, Service Workers, etc.',
  },
  {
    img: '/static/images/projects/procinal.png',
    alt: 'Procinal',
    title: 'Procinal - Cinema',
    link: 'https://procinal.com',
    content: 'I worked with JavaScript the reservation system.',
  },
  {
    img: '/static/images/projects/redcluster.jpg',
    alt: 'Red Cluster',
    title: 'Red Cluster - Pyme Clusters',
    link: 'http://www.redclustercolombia.com',
    content: 'I worked with Codeigniter and JavaScript',
  },
]

class Experiences extends Component {
  goTo = link => () => {
    window.open(link, '_blank')
  }

  render() {
    const { classes } = this.props;
    // xs {...(exp.responsive ? exp.responsive : {})}
    return (
      <div className={classes.container}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography gutterBottom variant="headline" component="h2">
          Some projects that I have worked
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
                  <Typography component="p" variant="subheading">
                    {exp.content}
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <Tooltip title={`Go to ${exp.alt}`}>
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

Experiences.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyle(styles)(Experiences)
