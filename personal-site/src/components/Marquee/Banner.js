import React from "react"
import style from './_marque.module.scss'

class Banner extends React.Component {
    render() {
        return (
            <div className={style.marquee}>
                <span>
                <i class="fab fa-java"></i>
                <i class="fab fa-js-square"></i>
                <i className="fab fa-python"></i>
                <i className="fab fa-github"> </i>
                <i className="fab fa-react"> </i>
                <i className="fab fa-docker"></i>
                <i className="fab fa-node"></i>
                </span>
            </div>
                )
            }
        }

export default Banner