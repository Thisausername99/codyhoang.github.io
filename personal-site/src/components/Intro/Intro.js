import React from 'react'
import Desert from '../../images/cubicDesert.jpg'
import Umass from '../../images/umass.png'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class Slider extends React.Component {
    state = {
        items: [
            {id: 1, src: Umass},
            {id: 2, src: Desert},
            {id: 3, src: Desert},
            {id: 4, src: Desert},
            {id: 5, src: Desert}
        ]
    }
    render(){
        const { items } = this.state;
        return (
        <AwesomeSlider>
            {items.map(item => <div key={item.id} data-src={item.src}></div>)}
            {/* <div data-src={Desert}/>
            <div data-src={Umass} />
            <div data-src={Umass} /> */}
        </AwesomeSlider>
    )
    }
};

export default Slider;