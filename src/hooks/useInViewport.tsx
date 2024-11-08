import { useEffect, useRef, useState } from 'react'

const useInViewport = (
  options?: IntersectionObserverInit
): [inViewport: boolean, containerRef: React.MutableRefObject<null>] => {
  const ref = useRef(null)
  const [inViewport, setInViewport] = useState(false)

  // const onIntersection: IntersectionObserverCallback = (entries) => {
  //   const [entry] = entries
  //   // console.log(
  //   //   '=======entry.intersectionRatio=========',
  //   //   Math.ceil(entry.intersectionRatio)
  //   // )
  //   // if (entry.isIntersecting && entry.intersectionRatio !== intersectionRatio) {
  //   //   intersectionRatio = entry.intersectionRatio
  //   //   setinViewport(true)
  //   // } else {
  //   //   setinViewport(false)
  //   // }
  //   console.log('======CHECK============')
  //   setInViewport(entry.isIntersecting)
  // }

  // useEffect(() => {
  //   let observerRefValue = null
  //   const observer = new IntersectionObserver(onIntersection, {
  //     // root: null,
  //     threshold: 0.8,
  //   })

  //   if (containerRef.current) {
  //     observer.observe(containerRef.current)
  //     observerRefValue = containerRef.current
  //   }

  //   console.log('==============OBSERVER==================')
  //   return () => {
  //     if (observerRefValue) {
  //       observer.unobserve(observerRefValue)
  //     }
  //   }
  // }, [containerRef, options])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInViewport(entry.isIntersecting)
    }, options)

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options, ref])

  return [inViewport, ref]
}

// import { useState, useEffect } from 'react'

// function useInViewport<T extends HTMLElement>(
//   ref: React.RefObject<T>,
//   options?: IntersectionObserverInit
// ) {
//   const [inViewport, setInViewport] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setInViewport(entry.isIntersecting)
//     }, options)
//     const currentRef = ref.current
//     if (currentRef) {
//       observer.observe(currentRef)
//     }
//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef)
//       }
//     }
//   }, [options, ref])
//   return inViewport
// }
export default useInViewport
