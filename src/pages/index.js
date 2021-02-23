import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageTile from '../components/imageTile'

const IndexPage = ({data}) => {
  const categories = data.allContentfulCategory.edges.map(edge => edge.node)
  categories.sort((a, b) => (a.name > b.name) ? 1 : -1)
  const homepageTagline = data.contentfulAbout.homepageTagline.homepageTagline

  return (
    <Layout>
      <SEO title="Home" />
      <div className="w-full lg:w-8/12 pb-8 lg:pb-12">
        <p className="font-lato text-3xl text-gray-600 leading-10">{homepageTagline}</p>
      </div>
      <div className="flex flex-wrap -mx-2 overflow-hidden">
        {categories.map((category, i) =>  (
          <ImageTile
            key={i}
            mdColumnCount={2}
            lgColumnCount={2}
            link={`/${category.slug}/`}
            photoSrc={category.coverPhoto.fixed.src}
            photoWidth={category.coverPhoto.fixed.width}
            photoHeight={category.coverPhoto.fixed.height}
            title={`View ${category.name} Projects`} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    contentfulAbout(slug: {eq: "about"}) {
      homepageTagline {
        homepageTagline
      }
    }
    allContentfulCategory {
      edges {
        node {
          name
          slug
          coverPhoto {
            fixed(resizingBehavior: FILL, width: 1000, height: 563, toFormat: JPG, quality: 90) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`

export default IndexPage
