import React from 'react'
import trellis from "../../images/trellis.png"
import arduiNo from "../../images/arduino.png"
import StarIcon from '@material-ui/icons/Star'
import GitHub from '@material-ui/icons/GitHub'
import BuildIcon from '@material-ui/icons/Build'
import HttpsIcon from '@material-ui/icons/Https';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './_timeline.module.scss'
import { Button } from '@material-ui/core';



const Project = () => {

    const inlineStyle = {
        // width: "10px",
        // height: "90px",
        padding: "6px",
        //paddingBottom: "px",
        whiteSpace: "nowrap",
        overflowX: "auto",
        overflowY: "hidden",
        backgroundColor:"#F5F5F5",
        margin: "3px"
    }

    return (
        <div>
        <h1 className="h1_style">I have done what ?</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(112,128,144)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Jan - May 2020"
            iconStyle={{ background: 'rgb(139,0,139)', color: '#fff' }}
            icon={<BuildIcon/>}
        > TRELLIS
            <img src={trellis} alt="" className="logoImage"/>

            {/* <FontAwesomeIcon icon={faHome} /> */}
            <h2 className="vertical-timeline-element-title">Backend Developer</h2>
            <h4 className="vertical-timeline-element-subtitle">Amherst, MA</h4>
                <Button
                    variant="contained"
                    style={inlineStyle}
                    startIcon={<GitHub/>}
                    href="https://github.com/david-fisher/320-S20-Track2"
                    // style={{margin:"10px"}}
                >
                Github
                </Button>
                <ul>
                    <li>Developed a software that assists students from 5 colleges in booking appointment that suits their needs inspired by HandShake.</li>
                    <li>Designed and maintain API gateway integrating with front-end and database powered by AWS EC2.</li>
                </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(112,128,144)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Sep - Dec 2019"
            iconStyle={{ background: 'rgb(139,0,139)', color: '#fff' }}
            icon={<BuildIcon />}
        >HANDTILT3000
        <img src={arduiNo} alt="" className="logoImage"/>
            <h2 className="vertical-timeline-element-title">Hardware Developer</h2>
            <h4 className="vertical-timeline-element-subtitle">Amherst, MA</h4>
            <Button
                    variant="contained"
                    style={inlineStyle}
                    startIcon={<GitHub/>}
                    href="https://github.com/Thisausername99/HandTilt3000"
                    // style={{margin:"10px"}}
                >
                Github
            </Button>
            <Button
                variant="contained"
                style={inlineStyle}
                startIcon={<HttpsIcon />}
                href="https://sites.google.com/umass.edu/gaming-with-gesture/"
            >
            Website
            </Button>
            <ul>
                <li>Final project for CICS 290M - An physical computation intro course about fundamental of electronics and their applications.</li>
                <li>Reformed classic arcade games with revamped motion controller utilizing motion sensor (MPU 6050) on Arduino.</li>
            </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(255,215,0)', color: '#fff' }}
            icon={<StarIcon />}
        />
        </VerticalTimeline>
        </div>
        )
    }


export default Project