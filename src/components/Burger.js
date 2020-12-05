import React, {useState} from 'react'


function Burger(props) {
        return (
        <div id={props.index}>
            {props.name}
        </div>
    )
}

export default Burger