import Link from 'next/link'
import React from 'react'

function Navbar({currentPage}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">go to heremyas.me</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link href={'/'}>
          <a className={`nav-link ${currentPage === 1 ? 'active' : ''}`} aria-current="page">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href={'/about'}>
          <a className={`nav-link ${currentPage === 2 ? 'active' : ''}`}>About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href={'/projects'}>
          <a className={`nav-link ${currentPage === 3 ? 'active' : ''}`}>Projects</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar