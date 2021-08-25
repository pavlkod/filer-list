import React, { Component } from 'react'
import classes from './ProductRow.module.css'

class ProductRow extends Component {
  render() {
    const arClasses = [classes.title]
    if (!this.props.product.stocked) {
      arClasses.push(classes.unstock)
    }
    return (
      <tr>
        <td className={arClasses.join(' ')}>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}

export default ProductRow
