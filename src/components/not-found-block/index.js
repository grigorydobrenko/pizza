import React from 'react';
import img from "../../assets/img/cover.86b1db55.jpg";
import styles from './notFoundBlock.module.scss'


const Index = () => {
    return (
        <div className={styles.block}>
            <img src={img} alt="de"/>
            <h1 >Эта страница не существует</h1>
            <div>Но на других много вкусных пицц</div>
        </div>
    );
};

export default Index;