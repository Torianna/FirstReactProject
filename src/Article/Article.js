import React from 'react';
import './Article.css';
import styled from 'styled-components';

const StyleDiv = 
styled.div`
width:70%;
margin:auto;
border: 1px solid #dddddd;
box-shadow: 0 3px 4px #bbbbbb;
padding: 12px;
text-align: center;
margin-bottom: 10px;



@media (min-width: 900px)
{
    width: 630px;
}
`
;

const article = (props) =>
{

    const style={
        '@media (min-width: 900px)':{
            width: '630px'
        }
    }

return(
/* <div className="Article"  style={style}> */
    <StyleDiv>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <button onClick={props.deleteClick}>Delete article</button>
    <br></br>
    <br></br>
    </StyleDiv>
);
}

export default article;