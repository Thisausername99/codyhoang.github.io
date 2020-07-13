import React from "react"

import styles from "./_timeline.module.scss"



class Work extends React.Component {
  render () {
    return (
      <div className={styles.timeline_content}>
      <h1>Timeline</h1>
      <ul className={styles.timeline}>
        <li className={styles.event} data-date="65Million B.C.">
          <h3>Dinosaurs Roamed the Earth</h3>
          <p>RAWWWWWWRRR</p>
        </li>
        <li className={styles.event} data-date="2005">
          <h3>Creative Component Launched</h3>
          <p>"We can be all things to all people!"</p>
        </li>
        <li className={styles.event} id="date" data-date="2009">
          <h3>Squareflair was Born</h3>
          <p></p>
          <p>"We can be all things to Squarespace users!"</p>
        </li>

        <li className={styles.event} data-date="November 15, 2018">

          <h3>Squareflair Today</h3>

          <p>"We design and build from scratch!"</p>
          <p>When we say <em><strong>100% custom</strong></em> we mean it— and we build all sites on the Squarespace Developer platform.</p>
          <p>Did you know that all of our pixels are hand-forged from the rarest of subpixels grown and harvested in the <em>Nerd Forest</em></p>
          <p><strong>Our success can be measured by lives and brands enhanced by 9+ years of 100% Squarespace-focused service!</strong></p>
          {/* <p><a href="https://www.squareflair.com">squareflair.com</a></p> */}
        </li>
      </ul>
      </div>
    )
  }
}

export default Work