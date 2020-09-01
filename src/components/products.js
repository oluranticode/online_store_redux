import React, { Component } from 'react'
import util from '../util.js';

class Products extends Component {
    render() {
        const productItems = this.props.products.map(product => (
            <div className="thumbnail text-center" key={product.id}>
                <a href={`#${product.id}`} onClick={(e)=> this.props.handleAddToCart(e, product)}>
                <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
                <p>
                        {product.title}
                    </p>
                    </a>
                   
                    <div>
                    <b>{util.formatCurrency(product.price)}</b>
                    
                    <button className="btn btn-success" 
                    onClick={(e)=> this.props.handleAddToCart(e, product)}>Add To Cart</button>
                        </div>
                </div>
        ))
        return (
            <div className="col-md-4">
                {productItems}
            </div>
        )
    }
}

export default Products
