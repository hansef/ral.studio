import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

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
        {categories.map((category, i) => {
          return (
            <div key={i} className="box-border relative my-3 px-3 w-full overflow-hidden lg:w-1/2 text-gray-500 hover:text-black hover:underline">
              <Link to={`/${category.slug}/`}>
                <img className="object-cover w-full" src={category.coverPhoto.fixed.src} alt="" />
                <div className="hidden lg:block absolute top-0 left-0 bottom-0 right-0 px-3 opacity-0 hover:opacity-100">
                  <div className="lato text-lg uppercase font-bold flex w-full h-full bg-black bg-opacity-50 text-white justify-center items-center">
                    View {category.name} Projects
                  </div>
                </div>
                <div className="lg:hidden font-lato text-sm uppercase font-bold pt-3 pb-3">
                  View {category.name} Projects &gt;
                </div>
              </Link>
            </div>
          )
        })}
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
