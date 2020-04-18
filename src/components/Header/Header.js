import React, {useEffect} from 'react';
import styles from './Header.module.css';

const Header = (props) =>
{
  //przyjmuje funkcje ktora jest wywolywana po każdym renderowaniu komponentu
    useEffect(()=>
    { // musimy zmienić na dużą literę komponent funkcyjny
      console.log("Header useEffect");
    });

    const buttonStyles=[styles.toggleButton];

    
    if (props.showArticles) {
    
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
//użycie memo do optymalizacji, memo utrzymuje stan komponentu
export default React.memo(Header);