import Matrix from './Matrix'
import MMath from './MMath'
import { displayMatricesDimensions } from './helpers'

const Mx: any = {
  Matrix: Matrix,
  MMath: MMath,
  isMx: (): boolean => true,
  displayMatricesDimensions,
}

export default Mx