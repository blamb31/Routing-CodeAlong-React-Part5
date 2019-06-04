import React from 'react'

export default function Store(props) {
    return(
        <div>
            <h1>Coolest Store In The World</h1>
            {props.children}
        </div>

    )
}