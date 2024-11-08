export type Image = {
  url: string
  alt?: string
  width: string | number
  height: string | number
}

export type ImageApi = {
  id: number
  tags: string
  webformatURL: string
  webformatWidth: number
  webformatHeight: number
  largeImageURL: string
  imageWidth: number
  imageHeight: number
}

export type ImagesApiResponse = {
  total: number
  totalHits: number
  hits: ImageApi[]
}

export enum Col {
  'col1' = 'col1',
  'col2' = 'col2',
  'col3' = 'col3',
  'col4' = 'col4',
}

export type ColStrings = keyof typeof Col

export type ImageCols = {
  [key in ColStrings]: {
    totalHeight: number
    images: ImageApi[]
  }
}
