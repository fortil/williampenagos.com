import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
import Link from 'next/link'

export const ListBar = ({ router, handleDrawerToggle }) => {
  const download = () => {
    handleDrawerToggle()
    window.open(`/static/cv.pdf?v=${Math.random()}`, '_blank')
  }
  return (
    <div>
      <ListItem>
      </ListItem>
      <Link href='/'>
        <ListItem button selected={router.route === '/'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <Icon>person</Icon>
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>
      </Link>
      <Link href='/experience'>
        <ListItem button selected={router.route === '/experience'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <Icon>trending_up</Icon>
          </ListItemIcon>
          <ListItemText primary='Experience' />
        </ListItem>
      </Link>
      <Link href='/presentations'>
        <ListItem button selected={router.route === '/presentations'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <Icon>dvr</Icon>
          </ListItemIcon>
          <ListItemText primary='Presentations' />
        </ListItem>
      </Link>
      <Link href='/skills'>
        <ListItem button selected={router.route === '/skills'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <Icon>bar_chart</Icon>
          </ListItemIcon>
          <ListItemText primary='Skills' />
        </ListItem>
      </Link>
      <Link href='/contact'>
        <ListItem button selected={router.route === '/contact'} onClick={handleDrawerToggle}>
          <ListItemIcon>
            <Icon>mail</Icon>
          </ListItemIcon>
          <ListItemText primary='Contact' />
        </ListItem>
      </Link>
      <ListItem button onClick={download}>
        <ListItemIcon>
          <Icon>description</Icon>
        </ListItemIcon>
        <ListItemText primary='Resume' />
      </ListItem>
    </div>
  )
}

