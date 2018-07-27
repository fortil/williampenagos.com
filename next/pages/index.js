import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyle } from '../src/withAll'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { SITE_NAME } from '../config'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { getUser } from '../redux/actions/profile'
import getInitialState from '../redux/reducers/initialState'
import { principalProjects } from '../utils/data'

class Home extends Component {
  state = {
    profile: {}
  }
  componentDidMount() {
    const { actions, profile } = this.props
    const user = profile.profile
    if (!Object.keys(user).length) {
      actions.getUser()
    }
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.profile.profile.hasOwnProperty('avatar_url')) {
      this.setState({ profile: nextProps.profile.profile })
    }
  }
  goTo = (entry, type) => {
    if (type === 'stack' && entry.stackLink) {
      window.open(entry.stackLink, entry.title)
    } else {
      window.open(entry.link, entry.title)
    }
  }
  
  render () {
    const { classes } = this.props
    const { profile } = this.state
    return <div className={classes.root}>
      <Grid container spacing={24} direction='row' justify='center'>
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={profile.avatar_url}
              title={profile.bio}
            />
            <CardContent>
              <Typography component='p' Subheading>
                From GitHub information
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <FontAwesomeIcon icon={faGithub} size='2x' />
                <Typography gutterBottom variant='headline' component='h2' style={{ marginLeft: 5 }}>
                  {profile.name}
                </Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                <Typography component='p' style={{ marginLeft: 5 }}>
                  @{profile.login} | {profile.location} - Colombia
                </Typography>
              </div>
              <br />
              <Typography component='p'>
                Web FullStack Development - {profile.bio}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={24} direction='row' justify='center'>
        <Grid item xs={4} style={{ textAlign: 'center', marginTop: 10 }}>
          <Typography variant='title'>
            The last projects that I have worked
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={24} direction='row' justify='center'>
        {
          principalProjects.map((entry, i) => {
            return <Grid item xs={4} key={i}>
              <Card className={classes.card2} style={{ cursor: 'pointer' }}>
                <CardMedia
                  className={classes.cover}
                  image={entry.image}
                  title={entry.description}
                  onClick={() => this.goTo(entry)}
                />
                <div className={classes.details}>
                  <CardContent className={classes.content2} onClick={() => this.goTo(entry, 'stack')}>
                    <Typography variant='subheading'>{entry.title}</Typography>
                    <Typography variant='caption'>Technologies:</Typography>
                    <Grid container spacing={0} direction='row' justify='center'>
                      {
                        entry.techs.map((tech, e) => {
                          return <Grid item xs={3} key={e}>
                            <FontAwesomeIcon icon={tech} />
                          </Grid>
                        })
                      }
                      {
                        entry.techSvg && entry.techSvg.map((Tech, e) => {
                          return <Grid item xs={3} key={e}>
                            <Tech aria-hidden='true' data-prefix='fab' data-icon='node-js' class='svg-inline--fa fa-node-js fa-w-14 ' role='img' viewBox='150 80 298 362' />
                          </Grid>
                        })
                      }
                    </Grid>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          })
        }
      </Grid>
    </div>
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

Home.defaultProps = {
  profile: {
    name: SITE_NAME
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 345,
    padding: theme.spacing.unit * 2,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  card2: {
    display: 'flex',
    color: theme.palette.text.secondary
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content2: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: 190,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  }
})

const mapStateToProps = (state = getInitialState()) => ({ profile: state.profile })

const mapDispatchToProps = dispatch => ({
  actions: {
    getUser: () => dispatch(getUser())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(styles, { withTheme: true })(Home))
