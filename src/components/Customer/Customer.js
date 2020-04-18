import React,{useState} from 'react'



const Customer = () => {

    const [customerState, setCustomerState] = useState({
    
        pickedName: "Marcin"
    });

    const [nameState, setNameState] = useState({names: ['Marcin','Marian','Marek']});

    const switchName = () =>{
        const namePull = nameState.names;
        const number = Math.floor(Math.random()*3);
        setCustomerState({pickedName: namePull[number]});
    }

    return(
        <div>
            <h2>Customer: </h2>
            <h3> {customerState.pickedName}</h3>
            <button onClick={switchName}> Change name </button>
        </div>

    );

}

export default Customer;