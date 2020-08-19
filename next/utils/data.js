import * as ICONS from '@fortawesome/free-brands-svg-icons'
import { FirebaseIcon } from '../src/icons'

export const getIconTech = iconStr => {
  const Icon = ICONS[`fa${iconStr}`]
  return Icon
}

export const principalProjects = [
  {
    title: 'Milo Credit',
    link: 'https://milocredit.com',
    stackLink: 'https://milocredit.com',
    image: '/static/projects/milocredit.png',
    description: "A new way of getting a home loan online. Home loans don't need to be complicated or take forever",
    techs: ['React', 'Chrome', 'Aws', 'Docker', 'Css3', 'Js', 'Loopback', 'Python', 'NodeJs']
      .map(getIconTech)
  },
  {
    title: 'Sightline Maps',
    link: 'https://sightlinemaps.com',
    stackLink: 'https://stackshare.io/sightline-maps/sightline-maps',
    image: '/static/projects/sightlinemaps.gif',
    description: 'Premium cloud storage, file viewing, and sharing for LiDAR imagery data in your browser',
    techs: ['React', 'Chrome', 'Aws', 'Docker', 'Css3', 'Js', 'GoogleDrive', 'Python', 'NodeJs']
      .map(getIconTech)
  },
  {
    title: 'Chiper',
    link: 'https://chiper.co',
    stackLink: 'https://stackshare.io/chiper/chiper',
    image: '/static/projects/chiper.png',
    description: 'Vende productos de las mejores marcas y a los mejores precios.',
    techs: ['React', 'Aws', 'Docker', 'Css3', 'Js', 'NodeJs']
      .map(getIconTech),
    techSvg: [FirebaseIcon]
  }
]