import PropTypes from 'prop-types'
import React from 'react'
import RotatingText from 'react-rotating-text'
import Drill from './../audio/core_drill_sound.mp3'
import { useState, useEffect } from "react";

// import 'ReactRotatingText.css';

// import Typewriter from 'typewriter-effect';

const useAudio = () => {
  const [audio] = useState(new Audio(Drill));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <h1 className="fancy" onMouseEnter={toggle}> Huy Hoang </h1>
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

           {/* <h1 className="fancy" onMouseOver = {drillPlay}>

          Huy Hoang</h1> */}
          <Player></Player>

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
