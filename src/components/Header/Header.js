import React, {useEffect} from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

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

      const futureYear = props.year +10;
  

    return(
        <div>
            <h1>Article App</h1>
            <h2>Future Year: {futureYear}</h2>
             <button className={buttonStyles.join(' ')}
                onClick={props.toggleArticles}>Toggle Articles
            </button>
      </div>
    );
}
//warning when wrong type
Header.propTypes={
  year: PropTypes.number
}
//użycie memo do optymalizacji, memo utrzymuje stan komponentu
export default React.memo(Header);