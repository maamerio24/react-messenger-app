import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './views/Home'
import { Sent } from './views/Sent'
import { Trash } from './views/Trash'
import { useAuth } from './contexts/AuthProvider'


export const App = () => {

  const { signIn, currentUser, logOut } = useAuth()


  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">ReactMessage</Link>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Inbox <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/sent">Sent</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/trash">Trash</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {
                !currentUser.loggedIn
                  ?
                  <li className="nav-item active">
                    <Link onClick={() => signIn()} className="nav-link" to="." >Sign in</Link>
                  </li>
                  :
                  <li className="nav-item active">
                    <Link onClick={() => logOut()} className="nav-link" to=".">Sign out</Link>
                  </li>
              }
            </ul>

          </div>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/sent' element={<Sent />} />
          <Route exact path='/trash' element={<Trash />} />
        </Routes>
      </main>

      <footer>

      </footer>
    </React.Fragment>
  )
}

