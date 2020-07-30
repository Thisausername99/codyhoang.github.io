
// import internOne from "../../images/bevoo.png"
// import arduiNo from "../../images/arduino.png"
// import trellis from "../../images/trellis.png"
// import fpt from "../../images/fpt-software-logo.png"
// import styles from "./_timeline.module.scss"
import React from 'react'
import StarIcon from '@material-ui/icons/Star'

import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import  style from './_timeline.module.scss'


class Work extends React.Component {
  render () {
    return (
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
      <div>
      <h1 className={style.h1_style}>Timeline</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={faHome}
        >
          {/* <FontAwesomeIcon icon={faHome} /> */}
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>Developed UI friendly chat bot scripts generator using MEAN stack.</p>
              <p>Developed website information scraper tools for specific needs.</p>
              <p>Customized Facebook chat bot utilizing DiaglogFlow for medical clinics, hospital.</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
      </div>
    )
  }
}

export default Work


// const data = [
//   {
//     props: {
//       date: '2011 - present',
//       className: 'vertical-timeline-element--work',
//       contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
//       contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
//       iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
//       icon: <WorkIcon />,
//     },
//     title: 'Creative Director',
//     subtitle: 'Miami, FL',
//     content:
//       'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
//   },
//   {
//     props: {
//       date: '2010 - 2011',
//       className: 'vertical-timeline-element--education',
//       contentStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
//       contentArrowStyle: { borderRight: '7px solid  rgb(233, 30, 99)' },
//       iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
//       icon: <SchoolIcon />,
//     },
//     title: 'Content Marketing for Web, Mobile and Social Media',
//     subtitle: 'Online Course',
//     content: 'Strategy, Social Media',
//   },
//   {
//     props: {
//       date: '2010 - 2011',
//       className: 'vertical-timeline-element--education',
//       contentStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
//       contentArrowStyle: { borderRight: '7px solid  rgb(233, 30, 99)' },
//       iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
//       icon: <SchoolIcon />,
//     },
//     title: 'Content Marketing for Web, Mobile and Social Media',
//     subtitle: 'Online Course',
//     content: 'Strategy, Social Media',
//   },

//   {
//     props: {
//       date: '2010 - 2011',
//       className: 'vertical-timeline-element--education',
//       contentStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
//       contentArrowStyle: { borderRight: '7px solid  rgb(233, 30, 99)' },
//       iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
//       icon: <SchoolIcon />,
//     },
//     title: 'Content Marketing for Web, Mobile and Social Media',
//     subtitle: 'Online Course',
//     content: 'Strategy, Social Media',
//   },

//   {
//     props: {
//       date: '2010 - 2011',
//       className: 'vertical-timeline-element--education',
//       contentStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
//       contentArrowStyle: { borderRight: '7px solid  rgb(233, 30, 99)' },
//       iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
//       icon: <SchoolIcon />,
//     },
//     title: 'Content Marketing for Web, Mobile and Social Media',
//     subtitle: 'Online Course',
//     content: 'Strategy, Social Media',
//   },


// ];



// var counter = 1

// const VerticalLoadMore = () => {
//   const [elements, setElements] = useState(data.slice(0,1));


//   const loadMore = () => {                   // this to set more state [...arr,...arr2] this is array concatentation
//     if (counter  === data.length - 1){    //stop render
//       addButton(2)
//       return;
//     }
//     else
//       counter = counter + 1
//     setElements([...elements,...[data[counter]]]);
//     console.log(counter)
//   }

//   useEffect(() => {
//     //eslint-disable-next-line react-hooks/exhaustive-deps
//     loadMore();
//   },[]);


//   function addButton (icon) {
//     if (icon < data.length - 1)
//       // conosle.log(icon);
//     // <Fab classes={{ root: 'fab-button' }} color="primary" aria-label="add">
//       return <AddCircleIcon/>;
//     else
//       return <StarIcon/>;
//   }

//   const getTimelineElements = () =>
//     elements.map((element,i) => (
//       <VerticalTimelineElement {...element.props} key ={i} >
//         <h3 className="vertical-timeline-element-title" >{element.title}</h3>
//         <h4 className="vertical-timeline-element-subtitle">
//           {element.subtitle}
//         </h4>
//         <p>{element.content}</p>
//       </VerticalTimelineElement>
//     ));

//   return (
//     <div>
//       <VerticalTimeline>
//         {getTimelineElements()}
//         <VerticalTimelineElement
//           iconOnClick={loadMore}
//           iconClassName="vertical-timeline-element-icon--button"
//           iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//           icon={addButton(counter)}
//         />
//       </VerticalTimeline>
//     </div>
//   );
// };

// export default VerticalLoadMore;