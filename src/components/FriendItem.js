import React from 'react'

export const FriendItem = ({ props, onSelect, selected }) => {
    return (
        <li key={props.id} >

            <img src={props.image} />
            <h3>{props.name}</h3>

            {
                props.balance === 0 ?

                    <p>You and {props.name} are even</p>

                    :

                    props.balance < 0 ?
                        <p className="red">You owe {props.name} , {Math.abs(props.balance)} $ .</p>

                        :

                        <p className="green"> {props.name} own you , {props.balance} $ </p>


            }

            <button className="button" onClick={() => onSelect(props.id)}>

                {selected === props.id ? <>Close</> : <>Select</>} </button>



        </li >

    )
}
