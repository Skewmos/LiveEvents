import React from 'react';
import styles from "./bannerInformation.scss";

import CSSModules from 'react-css-modules';

const Banner = () => {
    return(
        <>
            <div className="row ml-0  mr-0">
                <div className={`col-md-12 ${styles.banner}`}>
                    <h6 className="text-center mt-2">⚠️ COVID-19 : Les mesures de sécurités sont actuellement en train de faire
                        de la danse.
                    </h6>
                </div>
            </div>
    </>
    )
}

export default CSSModules(Banner, styles);