import React from 'react'
import products from '../products'
import {Link} from 'react-router-dom'

export default function Products(props) {
    let categories = products.reduce( (acc, product) => {
        let {category} = product
        if(!acc.includes(category)) {
            acc.push(category) 
        }
        return acc
    }, [])

    let items = []
    let {category} = props.match.params
    if(category) {
        items = products.filter( product => product.category === category)
    }
   
    return ( 
        <div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', borderBottom: '1px solid black', padding: 40}}>
                {categories.map( category => {
                    return <Link to={`/store/products/${category}`} >{category}</Link>
                })}
            </div>
            {items.map( product => {
                return(
                    <div key={product.id}>
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                        <img src={product.imageUrl} alt='' height='200' />

                    </div>
                )
            })}
        </div>
    )
}