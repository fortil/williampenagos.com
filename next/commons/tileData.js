import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
import Link from 'next/link'

export const ListBar = ({ router }) => {
  return (
    <div>
      <ListItem>
      </ListItem>
      <Link href='/'>
        <ListItem button selected={router.route === '/'}>
          <ListItemIcon>
            <Icon>person</Icon>
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>
      </Link>
      <Link href='/experience'>
        <ListItem button selected={router.route === '/experience'}>
          <ListItemIcon>
            <Icon>trending_up</Icon>
          </ListItemIcon>
          <ListItemText primary='Experience' />
        </ListItem>
      </Link>
      <Link href='/speaks'>
        <ListItem button selected={router.route === '/speaks'}>
          <ListItemIcon>
            <Icon>dvr</Icon>
          </ListItemIcon>
          <ListItemText primary='Speaks' />
        </ListItem>
      </Link>
      <Link href='/skills'>
        <ListItem button selected={router.route === '/skills'}>
          <ListItemIcon>
            <Icon>bar_chart</Icon>
          </ListItemIcon>
          <ListItemText primary='Skills' />
        </ListItem>
      </Link>
      <ListItem button>
        <ListItemIcon>
          <Icon>mail</Icon>
        </ListItemIcon>
        <ListItemText primary='Contact' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon>description</Icon>
        </ListItemIcon>
        <ListItemText primary='Resume' />
      </ListItem>
    </div>
  )
}

