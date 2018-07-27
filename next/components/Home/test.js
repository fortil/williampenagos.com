export default props => {
  console.log('=======>', props)
  return <div>HOLA {` ${JSON.stringify(props.router, null, 2)} `}</div>
  // return <div>HOLA {` ${JSON.stringify(Object.keys(props), null, 2)} `}</div>
}
