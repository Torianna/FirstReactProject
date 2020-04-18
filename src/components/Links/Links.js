import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';

const links = () =>{
    return(
    <Auxiliary>
        <a href="https://www.google.com">https://www.google.com</a><br/>
        <a href="https://www.reactjs.org">https://www.reactjs.org</a><br/>
        <a href="https://www.nodejs.org">https://www.nodejs.org</a><br/>
    </Auxiliary>

    //or using array

    // [
    //     <a href="https://www.google.com">https://www.google.com</a><br/>
    //     <a href="https://www.reactjs.org">https://www.reactjs.org</a><br/>
    //     <a href="https://www.nodejs.org">https://www.nodejs.org</a><br/>
    // ]

    //or using React fragment (wbudowane w reacta coś ala Auxiliary)

     // <React.Fragment>
    //     <a href="https://www.google.com">https://www.google.com</a><br/>
    //     <a href="https://www.reactjs.org">https://www.reactjs.org</a><br/>
    //     <a href="https://www.nodejs.org">https://www.nodejs.org</a><br/>
    //  </React.Fragment>

    );
}
export default links;