import { useEffect, useRef, useState } from 'react'

function CountUp({ end, suffix = '', duration = 1400 }) {
  const [value, setValue] = useState(0)
  const nodeRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return
        hasAnimated.current = true

        const startTime = performance.now()
        const animate = (now) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setValue(Math.round(end * eased))
          if (progress < 1) requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
        observer.disconnect()
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [duration, end])

  return (
    <strong ref={nodeRef}>
      {value}
      {suffix}
    </strong>
  )
}

export default CountUp
