import React from 'react';


//komponent funkcyjny
const user = (props) => { //metoda strzalkowa

    // const date = new Date();

    // const hour= date.getHours();
    // const minute= date.getMinutes();
    // const second=date.getSeconds();

return <div> 
    <button onClick={props.buttonClick} className="FormButton" >Show User</button>
    <h2>Username: {props.userName}</h2>
    <h3>Role: {props.role}</h3>
<p>State: {props.children}</p>
</div>
}

export default user;