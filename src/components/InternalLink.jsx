import { Link } from 'react-router-dom'

export default function InternalLink({ to, className, children, ...props }) {
  if (!to) {
    return (
      <button type="button" className={className} {...props}>
        {children}
      </button>
    )
  }

  return (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  )
}
