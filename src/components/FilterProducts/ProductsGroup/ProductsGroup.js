import React, { Component } from 'react'

class ProductsGroup extends Component {
  render() {
    return (
      <tr colSpan={2}>
        <td>
          <b>{this.props.category}</b>
        </td>
      </tr>
    )
  }
}

export default ProductsGroup
