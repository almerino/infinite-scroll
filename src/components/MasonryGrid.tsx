import { useState } from 'react'

import type { ImageCols, ImageApi } from '../types/image'

import Image from './Image'
import Modal from './Modal'

function MasonryGrid({ imageCols }: { imageCols: ImageCols }) {
  const [selectedImage, setSelectedImage] = useState<ImageApi>()

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Object.entries(imageCols).map(([key, col]) => (
          <div key={key} className="grid auto-rows-max gap-4">
            {col.images.map((img) => (
              <button
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="rounded-lg focus:border-blue-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:ring"
              >
                <Image
                  key={img.id}
                  url={img.webformatURL}
                  alt={img.tags}
                  width={img.webformatWidth}
                  height={img.webformatHeight}
                />
              </button>
            ))}
          </div>
        ))}
      </div>

      <Modal
        open={!!selectedImage}
        onClose={() => {
          setSelectedImage(undefined)
        }}
      >
        {selectedImage && (
          <Image
            url={selectedImage.largeImageURL}
            alt={selectedImage.tags}
            width={selectedImage.imageWidth}
            height={selectedImage.imageHeight}
          />
        )}
      </Modal>
    </div>
  )
}

export default MasonryGrid
