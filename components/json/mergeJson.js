import Mobile from './Mobile'
import Web from './Web'
import Infraestrutura from './Infraestrutura'
import Marketing from './Marketing'

export default (function () {
  const array = []
  array.push(Web, Mobile, Infraestrutura, Marketing)
  return array
}())
