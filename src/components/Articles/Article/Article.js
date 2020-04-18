import React, {Component} from 'react';
import './Article.css';
import styles from './Article.module.css';

class Article extends Component
{
    
    // static getDerivedStateFromProps(this.props,state){
    //     //wywoływane na początku 
    //     console.log("Articles GetDerivedStateFromProps");
    //     return state;
    // }

    shouldComponentUpdate(nextprops, nextstate)
    { //anulowanie aktualizacji komponetu
        //druga?
        //analizowanie propsów i state'ów
        console.log("Articles shouldComponentUpdate");
        //chce aktualizowac - true
        return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate)
    {
        //po render
        //gdy chcemy pobrać położonie w jakim użytkownik znajdował się przed zaktualizwaniem komponentu
        console.log("Articles getSnapshotBeforeUpdate");
        return {message: " this is text message"};
    }

    componentDidUpdate(prevprops, prevstate, snapchot)
    {
        //po render
        //inf ze aktualizacja się skończyła
        //wywolywanie zapytan http
        //asynchroniczne zmiany 
        console.log("Articles componentDidUpdate ");
        console.log("Snapchot message: "+ snapchot.message)
    }

    render(){


    console.log("Articles render");

    const style={
        '@media (min-width: 900px)':{
            width: '630px'
        }
    }

return(
/* <div className="Article"  style={style}> */
    <div className={styles.article}>
    <h2>{this.props.title}</h2>
    <p className={styles.violet}>{this.props.content}</p>
    <button onClick={this.props.deleteClick}>Delete article</button>
    <br></br>
    <br></br>
    </div>
);
    }
}

export default Article;