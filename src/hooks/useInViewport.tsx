import { useEffect, useRef, useState } from 'react'

const useInViewport = (
  options?: IntersectionObserverInit
): [inViewport: boolean, containerRef: React.MutableRefObject<null>] => {
  const ref = useRef(null)
  const [inViewport, setInViewport] = useState(false)

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

export default useInViewport
