import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageTile from '../components/imageTile'

export default props => {
  const {
    pageContext: { name, coverPhoto, projects }
  } = props

  return (
    <Layout>
      <SEO title={name} image={coverPhoto.fixed.src} />
      <div className="flex flex-wrap -mx-2 overflow-hidden">
        {projects.map((project, i) => (
          <ImageTile
            key={i}
            mdColumnCount={2}
            lgColumnCount={3}
            link={`/projects/${project.slug}/`}
            photoSrc={project.coverPhoto.fixed.src}
            photoWidth={project.coverPhoto.fixed.width}
            photoHeight={project.coverPhoto.fixed.height}
            title={project.name} />
        ))}
      </div>
    </Layout>
  )
}