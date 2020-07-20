import React from "react"
import styles from "./_marque.module.scss"
import { faTwitter,faDocker } from '@fortawesome/free-brands-svg-icons';

class Banner extends React.Component{
    componentDidMount() {
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");
        root.style.setProperty("--marquee-elements", marqueeContent.children.length);
        for(let i=0; i<marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
        // console.log(marqueeElementsDisplayed)
        // console.log(root)
        console.log(marqueeContent)
    }
    render() {
        return (
            <div className="roller">
            <div className="marquee">
                <ul className="marquee-content">
                <li><i className="fab fa-docker"></i></li>
                <li><i className="icon fa-github"></i></li>
                <li><i className="icon fa-codepen"></i></li>
                <li><i className="icon fa-free-code-camp"></i></li>
                {/* <li><i className="icon fa-dev"></i></li> */}
                <li><i className="fab fa-docker"></i></li>
                <li><i className="icon fa-vuejs"></i></li>
                <li><i className="icon fa-angular"></i></li>
                <li><i className="icon fa-node"></i></li>
                <li><i className="icon fa-gamepad"></i></li>
                <li><i className="icon fa-aws"></i></li>
                <li><i className="icon fa-docker"></i></li>
                <li><i className="icon fa-android"></i></li>
                </ul>
            </div>
            <div className="marquee">
                <ul className="marquee-content">
                    <li><i className="icon fa-github"></i></li>
                    <li><i className="icon fa-codepen"></i></li>
                    <li><i className="icon fa-free-code-camp"></i></li>
                    <li><i className="icon fa-dev"></i></li>
                    <li><i className="icon fa-react"></i></li>
                    <li><i className="icon fa-vuejs"></i></li>
                    <li><i className="icon fa-angular"></i></li>
                    <li><i className="icon fa-node"></i></li>
                    <li><i className="icon fa-gamepad"></i></li>
                    <li><i className="icon fa-aws"></i></li>
                    <li><i className="icon fa-docker"></i></li>
                    <li><i className="icon fa-android"></i></li>
                </ul>
            </div>
            </div>
            )
        }
}

export default Banner