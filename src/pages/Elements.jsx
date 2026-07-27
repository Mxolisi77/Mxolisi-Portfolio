import PageBanner from '../components/PageBanner.jsx'

function Elements() {
  return (
    <>
      <PageBanner title="elements" />
      <section className="sample-text-area">
        <div className="container box_1170">
          <h3 className="text-heading">Text Sample</h3>
          <p className="sample-text">
            Every avid independent filmmaker has <b>Bold</b> about making that <i>Italic</i> interest
            documentary, or short film to show off their creative prowess. Many have great ideas and want to
            “wow” the<sup>Superscript</sup> scene, or video renters with their big project. But once you have the
            <sub>Subscript</sub> “in the can” (no easy feat), how do you move from a <del>Strike</del> through of
            master DVDs with the <u>“Underline”</u> marked hand-written title inside a secondhand CD case, to a
            pile of cardboard boxes full of shiny new, retail-ready DVDs, with UPC barcodes and polywrap
            sitting on your doorstep? You need to create eye-popping artwork and have your project replicated.
            Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is
            certainly a helpful option to ensure a professional end result, but to help with your DVD replication
            project, here are 4 easy steps to follow for good DVD replication results:
          </p>
        </div>
      </section>
      <section className="button-area">
        <div className="container box_1170 border-top-generic">
          <h3 className="text-heading">Sample Buttons</h3>
          <div className="button-group-area">
            {[
              'default',
              'primary',
              'success',
              'info',
              'warning',
              'danger',
              'link',
              'disable',
            ].map((type) => (
              <button key={type} type="button" className={`genric-btn ${type}`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
          <div className="button-group-area mt-10">
            {[
              'default-border',
              'primary-border',
              'success-border',
              'info-border',
              'warning-border',
              'danger-border',
              'link-border',
              'disable',
            ].map((type) => (
              <button key={type} type="button" className={`genric-btn ${type}`}>
                {type.replace('-border', ' Border').replace('disable', 'Disable')}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Elements;
