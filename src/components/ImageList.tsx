import { useEffect, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'

import useInViewport from '../hooks/useInViewport'
import { fetchImages } from '../api/fetchImages'
import type { ImageApi, ImageCols } from '../types/image'

import Image from './Image'
import Loader from './Loader'
import MasonryGrid from './MasonryGrid'
import { formatImageCols } from '../utils/formatImageCols'

const initCols: ImageCols = {
  col1: { totalHeight: 0, images: [] },
  col2: { totalHeight: 0, images: [] },
  col3: { totalHeight: 0, images: [] },
  col4: { totalHeight: 0, images: [] },
}

function ImageList({ query = '' }: { query: string }) {
  const [imageCols, setImageCols] = useState(initCols)

  const [inViewport, viewPortRef] = useInViewport({
    threshold: 0.9,
  })

  useEffect(() => {
    setImageCols(initCols)
  }, [query])

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ['images', query],
      queryFn: ({ pageParam }) => fetchImages(pageParam, query),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        // We can't go over the limit of hits from pixabay
        const total = allPages.reduce((acc, page) => acc + page.hits.length, 0)
        if (total >= lastPage.totalHits) {
          return null
        }

        return lastPageParam + 1
      },
    })

  useEffect(() => {
    if (data && !isFetchingNextPage) {
      const newImages = data.pages[data.pageParams.length - 1].hits

      newImages.forEach((img: ImageApi) => {
        setImageCols((cols) => {
          return formatImageCols(cols, img)
        })
      })
    }
  }, [data, isFetchingNextPage])

  useEffect(() => {
    if (inViewport) {
      fetchNextPage()
    }
  }, [inViewport, fetchNextPage])

  if (status === 'pending') {
    return <Loader />
  }

  return (
    <div>
      <MasonryGrid imageCols={imageCols} />

      <footer ref={viewPortRef} className="p-12">
        {isFetchingNextPage && (
          <div className="mx-auto flex max-w-96 flex-col items-center justify-center p-16">
            <Loader />
          </div>
        )}

        {!hasNextPage && (
          <div className="mx-auto flex max-w-96 flex-col items-center justify-center border-t-2 border-dotted pt-3">
            <Image
              url="https://cdn.pixabay.com/photo/2013/06/17/10/28/end-139848_1280.jpg"
              alt="the end"
              width="1280"
              height="960"
            />
            <div className="p-2 text-xs">
              You have reached the end, nothing more to load.
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="mx-auto flex max-w-96 flex-col items-center justify-center border-t-2 border-dotted pt-3">
            <Image
              url="https://cdn.pixabay.com/photo/2020/04/22/18/22/excuse-me-5079442_1280.jpg"
              alt="the end"
              width="1280"
              height="960"
            />
            <div className="p-2 text-xs">
              Sorry for the inconvenience something bad happened
            </div>
          </div>
        )}
      </footer>
    </div>
  )
}

export default ImageList
