import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import ReactPlayer from 'react-player'

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
      photoGallery,
    }
  } = props
  const displayName = longFormName || name
  return (
    <Layout>
      <SEO title={displayName} />
      <section className="w-full project">
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="md:col-span-8">
            {videoUrl?.videoUrl && (
              <div className="relative mb-5" style={{ paddingTop: '56.25%' }}>
                <ReactPlayer 
                  className="absolute inset-0 w-full h-full"
                  url={videoUrl?.videoUrl}
                  width="100%"
                  height="100%"
                  config={{
                    youtube: {
                      playerVars: {
                        modestbranding: 1
                      }
                    },
                    vimeo: {
                      playerOptions: {
                        title: 1,
                        byline: 1,
                        controls: 1
                      }
                    }
                  }} />
              </div>
            )}
            {photoGallery.map((photo, i) => {
              return (
                <div className="pb-5" key={i}>
                  <img src={photo.fixed.src} alt="" width={photo.width} height={photo.height} />
                </div>
              )
            })}

            {category?.[0].slug && (
              <Link to={`/${category[0].slug}/`} className="font-lato font-semibold">&lt; View All {category[0].name} Projects</Link>
            )}
          </div>
          <div className="order-first md:order-last md:col-span-4 md:pl-10">
            <h1 className="font-lato font-bold text-2xl pb-2">{displayName}</h1>
            {projectType?.projectType && (
              <p className="font-lato pb-6" dangerouslySetInnerHTML={{ __html: renderNewLines(projectType?.projectType) }}></p>
            )}
            {productionInfo?.productionInfo && (
              <p className="font-lato font-light pb-3 text-gray-500" dangerouslySetInnerHTML={{ __html: renderNewLines(productionInfo?.productionInfo) }}></p>
            )}
            {blurb?.raw && (
              <div className="font-lato font-light leading-8 pb-10">{renderRichText(blurb)}</div>
            )}
          </div>
          
        </div>
      </section>
      
    </Layout>
  )
}