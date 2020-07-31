import PropTypes from 'prop-types'
import React from 'react'
import RotatingText from 'react-rotating-text'
// import 'ReactRotatingText.css';

// import Typewriter from 'typewriter-effect';

// const Type =
// <Typewriter
//   options={{
//     strings: ['Hello', 'World'],
//     autoStart: true,
//     loop: true,
//   }}
// />

const Header = props => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <span className="icon fas fa-dice-d20"></span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Huy HoanG</h1>
          <p className="typewritter">
          {/* Programmer, Software Engineer, GameI am a&nbsp; */}
          <RotatingText items={['Programmer', 'Software Engineer', 'Gamer']} />
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              Intro
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('work')
              }}
            >
              Work
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                props.onOpenArticle('project')
              }}
            >
              Project
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                props.onOpenArticle('contact')
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
