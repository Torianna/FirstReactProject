import React from 'react';
import './Article.css';
import styled from 'styled-components';
import styles from './Article.module.css';


const article = (props) =>
{

    const style={
        '@media (min-width: 900px)':{
            width: '630px'
        }
    }

return(
/* <div className="Article"  style={style}> */
    <div className={styles.article}>
    <h2>{props.title}</h2>
    <p className={styles.violet}>{props.content}</p>
    <button onClick={props.deleteClick}>Delete article</button>
    <br></br>
    <br></br>
    </div>
);
}

export default article;