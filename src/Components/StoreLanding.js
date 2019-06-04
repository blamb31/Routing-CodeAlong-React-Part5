import React from 'react'
import {Link} from 'react-router-dom'

export default function StoreLanding(props) {
    return (
        <div>
            <p>
                This is so much fun !!!!!!!!!!!!!!!!!!
            </p>
            <Link to='/store/products' >See Products</Link>
        </div>
    )
}