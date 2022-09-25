import React from 'react';

import styles from './styles.module.scss';

function Loader () {

    return (
        <div className={styles.container}>
            <div className={styles.loding}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;