import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import BuildIcon from '@material-ui/icons/Build'
import { makeStyles } from '@material-ui/core/styles';
import  WorkIcon from '@material-ui/icons/Work'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './_timeline.module.scss'
import { Button } from '@material-ui/core';



const Project = () => {
    const classes =  makeStyles((theme) => ({
            button: {
            margin: theme.spacing(2),
            },
        }));

    return (
        <div>
        <h1 className="h1_style">Timeline</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<BuildIcon/>}
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
            contentStyle={{ background: 'rgb(128,0,0)', color: '#fff' }}
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<BuildIcon />}
        >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<BuildIcon />}
            >
            Delete
            </Button>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<WorkIcon />}
            >
            Delete
            </Button>
            {/* <Button variant="contained" style = {{display:"inline-block"}} >Default</Button>
            <Button variant="contained" style = {{display:"inline-block"}} >Default</Button> */}
            {/* <IconButton style = {{display:"inline-block"}} aria-label="delete">
                <WorkIcon />
            </IconButton> */}
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


export default Project