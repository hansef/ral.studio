import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const ImageTile = ({ mdColumnCount, lgColumnCount, link, photoSrc, photoWidth, photoHeight, title }) => {
  return (
    <div className={`box-border relative my-3 px-3 w-full overflow-hidden md:w-1/${mdColumnCount} lg:w-1/${lgColumnCount} text-gray-500 hover:text-black`}>
      <Link to={link}>
        <img className="object-cover w-full" src={photoSrc} width={photoWidth} height={photoHeight} alt="" />
        <div className="hidden lg:block absolute top-0 left-0 bottom-0 right-0 px-3 opacity-0 hover:opacity-100">
          <div className="font-lato text-lg uppercase font-bold flex w-full h-full bg-black bg-opacity-50 text-white justify-center items-center">
            {title} &rarr;
          </div>
        </div>
        <div className="lg:hidden font-lato text-sm uppercase font-bold pt-3 pb-3">
          {title} &rarr;
        </div>
      </Link>
    </div>
  )
}

ImageTile.propTypes = {
  mdColumnCount: PropTypes.number,
  lgColumnCount: PropTypes.number,
  link: PropTypes.string,
  photoSrc: PropTypes.string,
  photoWidth: PropTypes.number,
  photoHeight: PropTypes.number,
  title: PropTypes.string,
}

ImageTile.defaultProps = {
  mdColumnCount: 2,
  lgColumnCount: 3,
  link: ``,
  photoSrc: ``,
  photoWidth: null,
  photoHeight: null,
  title: ``
}

export default ImageTile
