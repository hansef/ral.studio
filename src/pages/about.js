import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({data}) => {
  const bio = data.contentfulAbout.bio
  const headshot = data.contentfulAbout.headshot.fixed
  const cv = data.contentfulAbout.cv.file.url
  
  return (
    <Layout>
      <SEO title="About" />
      <div className="flex flex-wrap -mx-2 overflow-hidden">
        <div className="my-3 px-10 py-0 md:py-5 md:pr-16 md:pl-3 w-full overflow-hidden md:w-2/5">
          <img className="md:mt-2" src={headshot.src} alt="" width={headshot.width} height={headshot.height} />
        </div>
        <div className="my-3 px-3 py-0 md:py-5 md:pl-16 md:pr-3 w-full overflow-hidden md:w-3/5 md:border-l-4 md:border-gray-300">
          <div className="font-lato font-light text-lg leading-8 bio">{renderRichText(bio)}</div>
          <div className="font-lato font-semibold uppercase text-sm pt-5">
            <a href={cv} target="_blank" rel="noreferrer" className="hover:underline text-gray-500 hover:text-black">Download Rabbit's CV &rarr;</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AboutPageQuery {
    contentfulAbout(slug: {eq: "about"}) {
      homepageTagline {
        homepageTagline
      }
      bio {
        raw
      }
      headshot {
        fixed(resizingBehavior: FILL, width: 800, toFormat: JPG, quality: 90) {
          src
          width
          height
        }
      }
      cv {
        file {
          url
        }
      }
    }
  }
`

export default AboutPage
