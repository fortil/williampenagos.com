import React from 'react'
import * as ICONS from '@fortawesome/free-brands-svg-icons'

export const getIconTech = iconStr => {
  const Icon = ICONS[`fa${iconStr}`]
  return Icon
}

export const principalProjects = [
  {
    title: 'Sightline Maps',
    link: 'https://sightlinemaps.com',
    image: '/static/projects/sightlinemaps.gif',
    description: 'Premium cloud storage, file viewing, and sharing for LiDAR imagery data in your browser',
    techs: ['React', 'Chrome', 'Aws', 'Docker', 'Css3', 'Js', 'GoogleDrive', 'Python', 'NodeJs']
      .map(getIconTech)
  },
  {
    title: 'Chiper',
    link: 'https://chiper.co',
    image: '/static/projects/chiper.png',
    description: 'Premium cloud storage, file viewing, and sharing for LiDAR imagery data in your browser',
    techs: ['React', 'Aws', 'Docker', 'Css3', 'Js', 'NodeJs']
      .map(getIconTech)
  }
]