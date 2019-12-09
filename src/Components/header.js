import React from "react";

function Header() {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/#">
        <img src={process.env.PUBLIC_URL + '/app-logo.png'} width="45" alt="" className="d-inline-block align-middle mr-2" />
        <span className="text-uppercase font-weight-bold">Moviepedia</span>
      </a>
    </nav>
  )
}

export default Header