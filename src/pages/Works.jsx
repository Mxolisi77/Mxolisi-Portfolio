import PageBanner from '../components/PageBanner.jsx'
import WorksShowcase from '../components/WorksShowcase.jsx'
import works from '../data/works.js'

function Works() {
  return (
    <>
      <PageBanner title="Works" />
      <WorksShowcase works={works} showHeader={false} showFooter={false} />
    </>
  )
}

export default Works
