import { ImageApi, ImageCols } from '../types/image'
import { getMinCol } from './getMinCols'

export const formatImageCols = (cols: ImageCols, image: ImageApi) => {
  const minCol = getMinCol(cols)

  return {
    ...cols,
    [minCol]: {
      images: [
        ...cols[minCol].images,
        // generate a unique id as apparently some images can appear on several pages from pixabay
        { ...image, id: `${image.id}-${cols[minCol].totalHeight}` },
      ],
      totalHeight:
        cols[minCol].totalHeight + image.webformatHeight / image.webformatWidth,
    },
  }
}
