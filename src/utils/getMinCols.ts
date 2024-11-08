import { Col, type ImageCols, type ColStrings } from '../types/image'

export const getMinCol = (cols: ImageCols): ColStrings => {
  const min = Object.keys(cols).reduce((m, k) => {
    const key1 = m as ColStrings
    const key2 = k as ColStrings

    return cols[key1].totalHeight < cols[key2].totalHeight ? key1 : key2
  }, Col.col1)

  return min as ColStrings
}
