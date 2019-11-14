import rent from '../../images/rent.jpeg'
import cheap_house from '../../images/cheap_house.jpg'
import plane from '../../images/plane.jpg'
import suitcase from '../../images/suitcase.jpg'

import bulgaria from '../../images/bulgaria.jpg'
import hotel from '../../images/hotel.jpg'
import peacock from '../../images/peacock.png'
import versailles from '../../images/versailles.jpg'

const blog = [
  {
    img: `${rent}`,
    title: 'Rent car',
    cols: 1
  },
  {
    img: `${cheap_house}`,
    title: 'Cheap housing',
    cols: 2
  },
  {
    img: `${suitcase}`,
    title: 'How to put things in a suitcase?',
    cols: 2
  },
  {
    img: `${plane}`,
    title: 'Big discounts on flights! Black Friday 50% off',
    cols: 1
  },
]

const news = [
  {
    img: `${bulgaria}`,
    title: 'What to see and do in Rila National Park',
    cols: 1
  },
  {
    img: `${hotel}`,
    title: 'The worlds best boutique hotels for 2019',
    cols: 2
  },
  {
    img: `${peacock}`,
    title: 'Should emotional support animals be allowed on planes?',
    cols: 2
  },
  {
    img: `${versailles}`,
    title: 'Hotel opening on the grounds of versailles',
    cols: 1
  },
]

const data = {
  blog,
  news
}

export default data