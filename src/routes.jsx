import { Navigate, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Works from './pages/Works.jsx'
import WorkDetails from './pages/WorkDetails.jsx'
import Blog from './pages/Blog.jsx'
import SingleBlog from './pages/SingleBlog.jsx'
import Contact from './pages/Contact.jsx'
import Elements from './pages/Elements.jsx'

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<WorkDetails />} />
        <Route path="/works-details" element={<Navigate to="/works/1" replace />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/single-blog" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/elements" element={<Elements />} />
      </Routes>
    </Layout>
  )
}

export default AppRoutes;
