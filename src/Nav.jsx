function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Rodrigo Correa</a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
               <span className="sr-only"></span>
            </a>
          </li>

        <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li>

          <li className="nav-item">
            <a className="nav-link disabled" href="#">
                
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav