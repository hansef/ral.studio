import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => {
  const [isOpen, setisOpen] = React.useState(false)

  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <header className="py-0 lg:pt-5 pb-6 lg:pb-12">
      <nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full">
        <div className="flex flex-no-shrink items-stretch h-12">
          <h1 className="font-archivo text-3xl"><Link to="/" className="flex-no-grow flex-no-shrink relative py-2 leading-normal flex items-center">Rabbit <em className="px-2 not-italic text-green-600">AL</em> Friedrich</Link></h1>
          <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4 mt-1 focus:outline-none" onClick={handleClick}>
            {isOpen && (
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
            )}
            {!isOpen && (
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            )}
          </button>
        </div>
        <div className={`lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow ${  isOpen ? "block" : "hidden" }`}>
          <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <Link to="/live/" activeClassName="border-gray-700" className="font-lato text-lg uppercase flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal flex items-center border-b-2 hover:border-gray-700">Live</Link>
            <Link to="/screen/" activeClassName="border-gray-700" className="font-lato text-lg uppercase flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal flex items-center border-b-2 hover:border-gray-700">Screen</Link>
            <Link to="/about/" activeClassName="border-gray-700" className="font-lato text-lg uppercase flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal flex items-center border-b-2 hover:border-gray-700">About</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
