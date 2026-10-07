import { useEffect, useRef } from 'react'

function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div ref={ref} className={`home_reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}

export default ScrollReveal
