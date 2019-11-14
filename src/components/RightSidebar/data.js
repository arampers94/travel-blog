import athens from '../../images/athens.jpg'
import bali from '../../images/bali.jpg'
import cairo from '../../images/egypt.jpg'
import rome from '../../images/rome.jpg'

import berlin from '../../images/berlin.jpg'
import male from '../../images/male.jpg'
import london from '../../images/london.jpg'
import nyc from '../../images/nyc.jpeg'

const visited = [
  {
    img: `${rome}`,
    title: 'Rome, Italy',
  },
  {
    img: `${bali}`,
    title: 'Bali, Indonesia',
  },
  {
    img: `${athens}`,
    title: 'Athens, Greece',
  },
  {
    img: `${cairo}`,
    title: 'Cairo, Egypt',
  },
]

const willVisit = [
  {
    img: `${berlin}`,
    title: 'Berlin, Germany',
    cols: 1
  },
  {
    img: `${male}`,
    title: 'Male, Maldives',
    cols: 2
  },
  {
    img: `${london}`,
    title: 'London, England',
    cols: 2
  },
  {
    img: `${nyc}`,
    title: 'New York City, NY',
    cols: 1
  },
]

const data = {
  visited,
  willVisit
}

export default data