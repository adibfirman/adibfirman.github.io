import React, { useRef, Fragment, useEffect } from 'react'

import { Wrapper } from './styles'

function Header() {
  const eleHeader = useRef()

  function onUserScroll() {
    const ele = eleHeader.current
    const scrollTop = window.scrollY

    ;(function effectHeight() {
      let height = 300
      let maxHeight

      if (scrollTop > 670) maxHeight = 75
      else {
        maxHeight = ((height * (scrollTop - height * 3)) / (height * 3)) * -1
      }

      ele.style.height = `${maxHeight}px`
    })()
  }

  useEffect(() => {
    window.addEventListener('scroll', onUserScroll)
    return () => window.removeEventListener('scroll', onUserScroll)
  }, [])

  return <Wrapper ref={eleHeader} />
}

export default Header
