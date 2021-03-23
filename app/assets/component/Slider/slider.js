import React from "react";
import Carousel, { consts} from 'react-elastic-carousel'
import styles from "./slider.scss";



export default function AppSlider() {
  
  const BadgeType  = (data) => {
    console.log(data.data);
    if (data.data === "event") {
      return (
        <div className={styles.event}>
        <p>Event</p>
      </div>
      ) 
    } else if (data.data === "concert") {
      return (
        <div className={styles.concert}>
        <p>Concert</p>
      </div> 
      )
    }
  }

  const BadgeSong = (data) => {
    if (data.song) {
      return (
        <div className={styles.song}>
        <p>{data.song}</p>
      </div> 
      )
    }
  }

  const Item = () => {
    return (
      <div className={styles.containerSlider}>
        <img src="https://picsum.photos/seed/picsum/246/246" className={styles.imgSlider}/>
        <BadgeType data="event"/>
        <BadgeSong song="rap"/>
        <p className={styles.typeMusic}>Christine and the queens</p>
      </div>
    )
  }

  return (
    <Carousel itemsToScroll={2} itemsToShow={4}>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
  </Carousel>
  );
}