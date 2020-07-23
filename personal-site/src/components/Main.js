import PropTypes from 'prop-types'
import uni from '../images/umass-logo.jpg'
import transcript from '../images/transcript.pdf'
// import Work from './Work/Timeline'
import Banner from './Marquee/Banner.js'


import React, { useEffect, useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import './Work/_timeline.module.scss';

let counter = 1
const data = [
  {
    props: {
      date: '2011 - present',
      className: 'vertical-timeline-element--work',
      contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'Creative Director',
    subtitle: 'Miami, FL',
    content:
      'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
  },
  {
    props: {
      date: '2010 - 2011',
      className: 'vertical-timeline-element--education',
      contentStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  rgb(233, 30, 99)' },
      iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      icon: <SchoolIcon />,
    },
    title: 'Content Marketing for Web, Mobile and Social Media',
    subtitle: 'Online Course',
    content: 'Strategy, Social Media',
  },
  {
    props: {
      date: '2010 - 2011',
      className: 'vertical-timeline-element--education',
      contentStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  rgb(233, 30, 99)' },
      iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      icon: <SchoolIcon />,
    },
    title: 'Content Marketing for Web, Mobile and Social Media',
    subtitle: 'Online Course',
    content: 'Strategy, Social Media',
  },

  {
    props: {
      date: '2010 - 2011',
      className: 'vertical-timeline-element--education',
      contentStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  rgb(233, 30, 99)' },
      iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      icon: <SchoolIcon />,
    },
    title: 'Content Marketing for Web, Mobile and Social Media',
    subtitle: 'Online Course',
    content: 'Strategy, Social Media',
  },

  {
    props: {
      date: '2010 - 2011',
      className: 'vertical-timeline-element--education',
      contentStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  rgb(233, 30, 99)' },
      iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      icon: <SchoolIcon />,
    },
    title: 'Content Marketing for Web, Mobile and Social Media',
    subtitle: 'Online Course',
    content: 'Strategy, Social Media',
  },


];

const VerticalLoadMore = () => {
  const [elements, setElements] = useState(data.slice(0,1));


  const loadMore = () => {                   // this to set more state [...arr,...arr2] this is array concatentation
    if (counter  === data.length - 1){    //stop render
      addButton(2)
      return;
    }
    else
      counter = counter + 1
    setElements([...elements,...[data[counter]]]);
    // console.log(counter)
  }

  useEffect(() => {
    //eslint-disable-next-line react-hooks/exhaustive-deps
    loadMore();
  },[]);


  function addButton (icon) {
    if (icon < data.length - 1)
      // conosle.log(icon);
    // <Fab classes={{ root: 'fab-button' }} color="primary" aria-label="add">
      return <AddCircleIcon/>;
    else
      return <StarIcon/>;
  }

  const getTimelineElements = () =>
    elements.map((element,i) => (
      <VerticalTimelineElement {...element.props} key ={i} >
        <h3 className="vertical-timeline-element-title" >{element.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {element.subtitle}
        </h4>
        <p>{element.content}</p>
      </VerticalTimelineElement>
    ));

  return (
    <div>
      <VerticalTimeline>
        {getTimelineElements()}
        <VerticalTimelineElement
          iconOnClick={loadMore}
          iconClassName="vertical-timeline-element-icon--button"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={addButton(counter)}
        />
      </VerticalTimeline>
    </div>
  );
};


class Main extends React.Component {
  state   = {
    reset : 0,
  }
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
          this.setState(prevState => ({
            reset: prevState.reset + 1
          }))
          counter = 1 //reset display information
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
            <VerticalLoadMore key={this.state.reset}/>
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
