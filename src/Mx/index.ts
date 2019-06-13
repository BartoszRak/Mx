import Matrix from './Matrix'
import { displayMatricesDimensions } from './helpers'

const Mx: any = {
  Matrix,
  isMx: (): boolean => true,
  displayMatricesDimensions,
}

export default Mx