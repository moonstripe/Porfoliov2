import React from 'react'
import {
  Link
} from "react-router-dom";

export function Title() {
    return (
  
  
      <div className={'title'}>
  
        <div className={'logo'}>
          <h1>moonstripe design</h1>
          <p>beauty in function,</p>
          <p style={{ textAlign: 'right', marginRight: '25px' }}>practicality in form.</p>
        </div>
  
        <nav className={'logo'}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
  
        <div className={'logo'}>
          <p>GitHub: <a href={'https://github.com/moonstripe'}>moonstripe</a></p>
          <p>Twitter: <a href={'https://twitter.com/moonstripe_____'}>@moonstripe_____</a></p>
          <p>Email: <a href={'mailto:moonstripe@protonmail.com'}>moonstripe@protonmail.com</a></p>
        </div>
      </div>
    )
  }