import { withRouter } from 'next/router'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'

export const withAll = (styles, propsStyle) =>
  Component =>
    withRouter(
      withWidth()(
        withStyles(styles, propsStyle)(Component)
      )
    )

export const withStyle = (styles, propsStyle) =>
  Component => withWidth()(
    withStyles(styles, propsStyle)(Component)
  )
