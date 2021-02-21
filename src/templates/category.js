import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default props => {
  const {
    pageContext: { name, projects }
  } = props
  return (
    <Layout>
      <SEO title={name} />
      <div className="flex flex-wrap -mx-2 overflow-hidden">
        {projects.map((project, i) => {
          return (
            <div className="box-border relative my-3 px-3 w-full overflow-hidden md:w-1/2 lg:w-1/3">
              <Link to={`/projects/${project.slug}/`}>
                <img className="object-cover w-full" src={project.coverPhoto.fixed.src} alt="" />
                <div className="hidden lg:block absolute top-0 left-0 bottom-0 right-0 px-3 opacity-0 hover:opacity-100">
                  <div className="font-lato text-lg uppercase font-bold flex w-full h-full bg-black bg-opacity-50 text-white justify-center items-center">
                    {project.name}
                  </div>
                </div>
                <div className="lg:hidden font-lato text-sm uppercase font-bold pt-3 pb-3">
                  {project.name} &gt;
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}