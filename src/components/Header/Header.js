import React from 'react';
import styles from './Header.module.css';

const header = (props) =>
{
    const buttonStyles=[styles.toggleButton];

    
    if (props.showArticles) {
        // buttonStyle.border = '2px solid red';
        // buttonStyle.transitionDuration = '0.4s';
        // buttonStyle[":hover"] = 
        // {
        //   backgroundColor: 'red ',
        //   color: 'white'
        // }
  
        buttonStyles.push(styles.red)
      }
  

    return(
        <div>
            <h1>Article App</h1>
             <button className={buttonStyles.join(' ')}
                onClick={props.toggleArticles}>Toggle Articles
            </button>
      </div>
    );
}
export default header;