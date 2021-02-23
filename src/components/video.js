import PropTypes from 'prop-types'
import React from 'react'
import ReactPlayer from 'react-player'

const Video = ({ videoUrl }) => {
  return (
    <div className="relative mb-5" style={{ paddingTop: '56.25%' }}>
      <ReactPlayer 
        className="absolute inset-0 w-full h-full"
        url={videoUrl}
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
  )
}

Video.propTypes = {
  videoUrl: PropTypes.string,
}

Video.defaultProps = {
  videoUrl: ``,
}

export default Video
