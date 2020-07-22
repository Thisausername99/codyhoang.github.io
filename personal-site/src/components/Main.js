import PropTypes from 'prop-types'
import React from 'react'
import uni from '../images/umass-logo.jpg'
import transcript from '../images/transcript.pdf'
import Work from './Work/Timeline'
import Banner from './Marquee/Banner.js'



class Main extends React.Component {
  render() {
    let close = (
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
            <img src={uni} alt="" height="250"/>
          </span>
          <p>
            I'm Huy Hoang, I'm currently pursuing B.S in Computer Science at University of Massachusetts Amherst. Checkout my <a href={transcript}> transcript </a>.
          </p>
          <p>
            I am a responsible, self-disciplined, committed, and studious individual. I’m tidy and like to keep things
            neat and elegant just like my code. I’ve developed a deep admiration for computer science as technology has
            inevitably revolutionized the world. I, myself, want to contribute to this revolution; therefore, becoming
            a successful software engineer is my goal. I have standard knowledge in Java, C, JS, Python. I thrive to learn more languages
            and be efficient in all of them.
          </p>
          <div>
            <Banner />
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
          <h2 className="major">work</h2>
          <div>
            <Work />
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
                <span className="label">Instagram</span>
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
