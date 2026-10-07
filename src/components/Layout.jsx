import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Layout({ children }) {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.classList.toggle('home-scrollbar-hidden', pathname === '/')

    return () => {
      document.documentElement.classList.remove('home-scrollbar-hidden')
    }
  }, [pathname])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
