import PropTypes from 'prop-types'
import React from 'react'
import RotatingText from 'react-rotating-text'
import Drill from './../audio/core_drill_sound.mp3'
import useSound from 'use-sound';





//add audio effect when hover over name

const DrillAudio = () => {
  const [play, { stop }] = useSound(
    Drill,
    { volume: 0.5,
    loop : true }
    );
  const [isHovering, setIsHovering] = React.useState(false);
  return (
          <div>
            <h1 className="fancy"
            onMouseEnter={() => {
            setIsHovering(true);
            play();
            }}
            onMouseLeave={() => {
            setIsHovering(false);
            stop();
        }} > Huy Hoang </h1>
          </div>
        );
};


const Header = props => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <span className="icon fas fa-dice-d20"></span>
      </div>
      <div className="content">
        <div className="inner">
        <DrillAudio></DrillAudio>
          <p className="typewritter">
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
