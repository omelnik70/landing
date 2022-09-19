import React, { useContext } from 'react';

import Context from '../../Context';

import styles from './style.module.scss';


function Modal ({ active, children, modalActiv }) {
    const { dispatch } = useContext(Context);

    return (
        <div 
            onClick={() => dispatch(modalActiv(!active))}
            className={active ?
            `${styles.overlay} ${styles.open}`:
            `${styles.overlay}`}>
            <div 
                onClick={e => e.stopPropagation()}
                className={active ?
                `${styles.window} ${styles.open}`:
                `${styles.window}`}>
                    <div 
                        onClick={() => dispatch(modalActiv(!active))}
                        className={styles.close}>
                        &times;
                    </div>
                    {children}
            </div>
        </div>
    );
}

export default Modal;