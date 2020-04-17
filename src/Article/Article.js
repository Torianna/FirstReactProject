import React from 'react';
import './Article.css';
import Radium from 'radium'

const article = (props) =>
{

    const style={
        '@media (min-width: 900px)':{
            width: '630px'
        }
    }

return(
<div className="Article"  style={style}>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <button onClick={props.deleteClick}>Delete article</button>
    <br></br>
    <br></br>
</div>
);
}

export default Radium(article);