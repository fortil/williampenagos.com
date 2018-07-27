import React, { Component } from 'react'
import Error from 'next/error'

export default class Errores extends Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    return (
      <Error statusCode={this.props.statusCode} />
    )
  }
}
