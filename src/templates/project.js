import React from 'react'
import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Video from '../components/video'

function renderNewLines(str) {
  if (!str) return '';

  return str.split('\n').join('<br />')
}

export default props => {
  const {
    pageContext: {
      name,
      longFormName,
      category,
      projectType,
      productionInfo,
      blurb,
      videoUrl,
      coverPhoto,
      photoGallery,
    }
  } = props
  const displayName = longFormName || name
  
  return (
    <Layout>
      <SEO title={displayName} image={coverPhoto.fixed.src} />
      <section className="w-full">
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="md:col-span-8">
            {videoUrl?.videoUrl && <Video videoUrl={videoUrl.videoUrl} />}
            {photoGallery.map((photo, i) => {
              return (
                <div className="pb-5" key={i}>
                  <img src={photo.fixed.src} alt="" width={photo.width} height={photo.height} />
                </div>
              )
            })}

            {category.map((c, i) => {
              return (
                <span className="block font-lato font-semibold uppercase text-sm pb-3"><Link className="text-gray-500 hover:text-black hover:underline" key={i} to={`/${c.slug}/`}>&larr; View All {c.name} Projects</Link></span>
              )
            })}
          </div>
          <div className="project order-first md:order-last md:col-span-4 md:pl-10">
            <h1 className="font-lato font-bold text-2xl pb-2">{displayName}</h1>
            {projectType?.projectType && (
              <p className="font-lato pb-4" dangerouslySetInnerHTML={{ __html: renderNewLines(projectType?.projectType) }}></p>
            )}
            {productionInfo?.productionInfo && (
              <p className="font-lato font-light pb-3 text-gray-500" dangerouslySetInnerHTML={{ __html: renderNewLines(productionInfo?.productionInfo) }}></p>
            )}
            {blurb?.raw && (
              <div className="font-lato font-light leading-8 pb-5 lg:pb-10 blurb">{renderRichText(blurb)}</div>
            )}
          </div>
          
        </div>
      </section>
      
    </Layout>
  )
}