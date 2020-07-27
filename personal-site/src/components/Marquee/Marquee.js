import React from "react"
import style from './_marque.module.scss'
import Marquee from 'react-double-marquee';


class MarqueeScroll extends React.Component {
    render (){

    return (
        <div className={style.marquee}>
        <Marquee delay={1000}>
            <span>
                <i className="fab fa-java"></i>
                <i className="fab fa-js-square"></i>
                <i className="fab fa-python"></i>
                <i className="fab fa-github"> </i>
                <i className="fab fa-react"> </i>
                <i className="fab fa-docker"></i>
                <i className="fab fa-node"></i>
            </span>
        </Marquee>
        </div>
        );
    }
}


export default MarqueeScroll