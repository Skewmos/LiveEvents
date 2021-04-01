import React from 'react';
import styles from "./bannerInformation.scss";
const Banner = () => {
    return(
        <>
        <div className={styles.banner}>
            <p className={styles.bannerInfo}>⚠️ COVID-19 : Les mesures de sécurités sont actuellement en train de faire de la danse.</p>
        </div>
    </>
    )
}

export default Banner;