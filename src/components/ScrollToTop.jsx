import React, { useEffect, useState } from 'react'
import { PiArrowFatLineUpDuotone } from "react-icons/pi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className="fixed bottom-8 right-16 bg-transparent md:hidden">
      <a href="#top" aria-label="top">
        <PiArrowFatLineUpDuotone fontSize="large" className="text-blue-500 hover:text-blue-700" />
      </a>
    </div>
  ) : null
}

export default ScrollToTop