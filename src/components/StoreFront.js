import React from 'react';
import {useSelector} from 'react-redux';
import Product from './Product';


const StoreFront = () => {

    let products = useSelector(store => store.products.products);

    return (
        <div className="StoreFront">
            <div className="product-list">

                {products.map( product =>  (
                    <Product 
                    key={product.name} 
                    name={product.name} 
                    price={product.price}
                    description={product.description} 
                    image_url={product.image_url}
                    />
                )
                )}

            </div>
        </div>
    )

}

export default StoreFront;