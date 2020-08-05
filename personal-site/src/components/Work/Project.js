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
        fontFamily: "system-ui",
        padding: "6px",
        // background-image: linear-gradient(45deg, #874da2 0%, #c43a30 100%);
        //background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);;;;8%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);        
        whiteSpace: "nowrap",
        overflowX: "auto",
        overflowY: "hidden",
        background:"linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
        margin: "3px"
    }
    //background-image: linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%);
    return (
        <div>
        <h1 className="h1_style">Innovation</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Jan - May 2020"
            iconStyle={{ background: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)', color: '#fff' }}
            icon={<BuildIcon/>}
        > TRELLIS
            <img src={trellis} alt="" className="logoImage"/>

            {/* <FontAwesomeIcon icon={faHome} /> */}
            <h3 className="vertical-timeline-element-title">Backend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Amherst, MA</h4>
                <Button
                    variant="contained"
                    style={inlineStyle}
                    startIcon={<GitHub/>}
                    href="https://github.com/david-fisher/320-S20-Track2"
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
            contentStyle={{ background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)', color: '#fff' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Sep - Dec 2019"
            iconStyle={{ background: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)', color: '#fff' }}
            icon={<BuildIcon />}
        >HANDTILT3000
        <img src={arduiNo} alt="" className="logoImage"/>
            <h3 className="vertical-timeline-element-title">Hardware Developer</h3>
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