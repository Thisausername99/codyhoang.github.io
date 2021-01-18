import React from 'react'
import PropTypes from 'prop-types'
import Marq from './Marquee/Marquee.js'
import Work from './Work/Work.js'
import Project from './Work/Project.js'
import 'react-awesome-slider/dist/styles.css';
import Slider from './Intro/Intro';





class Main extends React.Component {

  render() {

    const close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
              <Slider></Slider>
          </span>
          <div class="table">
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-user"></i></span>
                Hi, my name is Huy Hoang, and I go by Cody. I'm a developer by day, and gamer by night.
              </li>
              <li><span class="fa-li"><i class="fa fa-graduation-cap" aria-hidden="true"/></span> 
                I'm a senior pursuing B.S degree in Computer Science at University of Massachusetts Amherst.
              </li>
              <li><span class="fa-li"><i class="fas fa-map-marker-alt"></i></span>
                Ho Chi Minh, VN
              </li>
              <li><span class="fa-li"><i class="fas fa-hashtag"></i></span> Responsible, Self-disciplined, Committed.</li>
            </ul>
          </div>
          {/* <p>
          <i class="fa fa-graduation-cap" aria-hidden="true"/>
            I'm Huy Hoang, I'm currently pursuing B.S in Computer Science at University of Massachusetts Amherst. Checkout my <a href={resume}> resume </a>.
          </p> */}
          {/* <p>
            I am a responsible, self-disciplined, committed.
          </p> */}
          <div>
            <Marq />
          </div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">work & experiences</h2>
          <div>
            <Work/>
          </div>
          {close}
        </article>


        <article
          id="project"
          className={`${this.props.article === 'project' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">project</h2>
          <div>
            <Project/>
          </div>
          {close}
        </article>


        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form  method="post" action="https://getform.io/f/f2fe38a6-e294-4500-acc8-c07e24774103">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>

          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/huy-hoang-cody/" className="icon fab fa-linkedin">
                <span className="label">linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Thisausername99"
                className="icon fab fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>

            <li>
            <a href="mailto:cody_hoang99@yahoo.com" className="icon fa fa-envelope">
              <span className="label">Email</span>
            </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = { //check type
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
