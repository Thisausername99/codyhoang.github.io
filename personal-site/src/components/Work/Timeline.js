
// import internOne from "../../images/bevoo.png"
// import arduiNo from "../../images/arduino.png"
// import trellis from "../../images/trellis.png"
// import fpt from "../../images/fpt-software-logo.png"
// import styles from "./_timeline.module.scss"
import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './_timeline.module.scss'


// class Work extends React.Component {
//   render () {
//     return (
//       // <div className={styles.timeline_content}>
//       // <h1 className={styles.for_h1}>Timeline</h1>
//       // <ul className={styles.timeline}>
//       //   <li className={styles.event} data-date="June - Present 2020" >
//       //     <h3>FPT software internship
//       //     <a href="https://www.fpt-software.com/" > <img src = {fpt} alt="" style={{ display:"block", width:"20%", paddingTop:"10px"}}/> </a>
//       //     </h3>
//       //     <ul>
//       //       <li> Builded a simple website with ExpressJS and deployed using CI/CD tools and Docker.</li>
//       //       <li> Learned about system architect and the process of software deployment.</li>
//       //     </ul>
//       //   </li>

//       //   <li className={styles.event} data-date="Jan - May 2020">
//       //     <h3>Trellis
//       //     <img src={trellis} alt="" style={{ display:"block", width:"20%", paddingTop:"10px"}}/>
//       //     </h3>
//       //     <h4>
//       //         Umass Amherst, MA, USA 01002
//       //     </h4>
//       //     <ul>
//       //       <li><a href="https://github.com/david-fisher/320-S20-Track2">GitHub</a></li>
//       //       <li>Developed a software that assists students from 5 colleges in booking appointment inspired by HandShake.</li>
//       //       <li>Designed and maintain API gateway integrating with front-end and database powered by AWS EC2.</li>
//       //     </ul>

//       //   </li>

//       //   <li className={styles.event} id="date" data-date="Sep - Dec 2019">
//       //     <h3>HandTilt 3000
//       //     <img src={arduiNo} alt="" style={{ display:"block", width:"20%", paddingTop:"10px"}}/>
//       //     </h3>
//       //     <h4>
//       //         Umass Amherst, MA, USA 01002
//       //     </h4>
//       //     <ul>
//       //       <li><a href="https://sites.google.com/umass.edu/gaming-with-gesture/">Project Site</a></li>
//       //       <li>Final project for CICS 290M - An physical computation intro course about fundamental of electronics and their applications.</li>
//       //       <li>Reformed classic arcade games with revamped motion controller utilizing motion sensor (MPU 6050) on Arduino.</li>
//       //     </ul>
//       //   </li>


//       //   <li className={styles.event} data-date="June - August 2019">
//       //     <h3>Bevootech internship
//       //     <a href="https://bevootech.com/"> <img src={internOne} alt ="website" style={{ display:"block", width:"20%", paddingTop:"10px"}}/> </a>
//       //     </h3>
//       //     <h4>
//       //         Bevootech PTE LTD, Singapore 349314
//       //     </h4>
//       //     <ul>
//       //       <li>Developed UI friendly chat bot scripts generator using MEAN stack.</li>
//       //       <li>Developed website information scraper tools for specific needs.</li>
//       //       <li>Customized Facebook chat bot utilizing DiaglogFlow for medical clinics, hospital.</li>
//       //     </ul>
//       //   </li>


//       // </ul>
//       // </div>
//       <VerticalTimeline>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//           date="2011 - present"
//           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//           // icon={faHome}
//         >
//           {/* <FontAwesomeIcon icon={faHome} /> */}
//           <h3 className="vertical-timeline-element-title">Creative Director</h3>
//           <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//           <p>
//             Creative Direction, User Experience, Visual Design, Project Management, Team Leading
//           </p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
//           date="2010 - 2011"
//           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//           // icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Art Director</h3>
//           <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//           <p>
//             Creative Direction, User Experience, Visual Design, SEO, Online Marketing
//           </p>
//         </VerticalTimelineElement>
//         {/* <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="2008 - 2010"
//           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//           // icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Web Designer</h3>
//           <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
//           <p>
//             User Experience, Visual Design
//           </p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--work"
//           date="2006 - 2008"
//           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//           // icon={<WorkIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Web Designer</h3>
//           <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//           <p>
//             User Experience, Visual Design
//           </p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="April 2013"
//           iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//           // icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
//           <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//           <p>
//             Strategy, Social Media
//           </p>
//         </VerticalTimelineElement> */}
//         {/* <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="November 2012"
//           iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//           // icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
//           <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//           <p>
//             Creative Direction, User Experience, Visual Design
//           </p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           className="vertical-timeline-element--education"
//           date="2002 - 2006"
//           iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//           // icon={<SchoolIcon />}
//         >
//           <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
//           <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
//           <p>
//             Creative Direction, Visual Design
//           </p>
//         </VerticalTimelineElement>
//         <VerticalTimelineElement
//           iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
//           // icon={<StarIcon />}
//         /> */}
//       </VerticalTimeline>
//     )
//   }
// }

// export default Work


const dataExamples = [
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
  const [elements, setElements] = useState([]);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = () => {
    setElements([...dataExamples]);
  };



  const addButton = () => (
    <Fab classes={{ root: 'fab-button' }} color="primary" aria-label="add">
      <AddCircleIcon />
    </Fab>
  );

  const getTimelineElements = () =>
    elements.map(element => (
      <VerticalTimelineElement {...element.props}>
        <h3 className="vertical-timeline-element-title">{element.title}</h3>
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
          icon={<AddCircleIcon/>}
        />
      </VerticalTimeline>
    </div>
  );
};

export default VerticalLoadMore;