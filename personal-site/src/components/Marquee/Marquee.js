import React from "react"
import style from './_marque.module.scss'
import Marquee from 'react-double-marquee';


class MarqueeScroll extends React.Component {
    render (){
        const iStyle = {
            paddingLeft:"2rem",
            fontSize:"3rem"
        }
        return (
            <div className={style.marquee}>
                <Marquee delay={1000}>
                    <span>
                        <i style = {iStyle} className="fab fa-java"></i>
                        <i style = {iStyle} className="fab fa-js-square"></i>
                        <i style = {iStyle} className="fab fa-python"></i>
                        <i style = {iStyle} className="fab fa-github"> </i>
                        <i style = {iStyle} className="fab fa-react"> </i>
                        <i style = {iStyle} className="fab fa-docker"></i>
                        <i style = {iStyle} className="fab fa-node"></i>
                    </span>
                </Marquee>
            </div>
        );
    }
}


export default MarqueeScroll