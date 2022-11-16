import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
  tenzies,
  blogwebsite,
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: 'Tenzies Game',
    desc:
      'A game in which Roll dices until all dices are the same.',
    stack: 'Html, Css, Javascript',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/SAHILKHAN7001/Tenzies-Game',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://sahilkhan7001.github.io/Tenzies-Game/',
    },
    imgUrl: tenzies,
  },
  {
    id: 2,
    name: 'Living the social life Website',
    desc: 'A Responsive blog exploring minimalism in life website',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/SAHILKHAN7001/Responsive-Website-',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://sahilkhan7001.github.io/Responsive-Website-/index.html',
    },
    imgUrl: blogwebsite,
  },
 
]
