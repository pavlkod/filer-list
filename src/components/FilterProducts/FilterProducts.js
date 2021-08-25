import React, { Component } from 'react'
import './FilterProducts.css'
import ProductsGroup from './ProductsGroup/ProductsGroup'
import ProductRow from './ProductRow/ProductRow'

class FilterProducts extends Component {
  render() {
    const inStockOnly = this.props.isStock
    const filteredText = this.props.search.toLowerCase()

    const rows = []
    let lastCategory = null

    this.props.products.forEach((product) => {
      const productName = product.name.toLowerCase()
      if (filteredText && productName.indexOf(filteredText) === -1) {
        return
      }
      if (!!inStockOnly && !product.stocked) {
        return
      }

      if (product.category !== lastCategory) {
        rows.push(<ProductsGroup category={product.category} key={product.category} />)
      }

      rows.push(<ProductRow product={product} key={product.name} />)
      lastCategory = product.category
    })
    if (rows.length) {
      return (
        <div className='filter-products'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      )
    } else {
      return <div className='filter-products'>No items</div>
    }
  }
}

function hoc(Comp) {
  class Hoc extends Component {
    render() {
      const { forwardedRef, ...rest } = this.props
      return (
        <div className='test'>
          <Comp {...rest} ref={forwardedRef} />
        </div>
      )
    }
  }
  function forwardRef(props, ref) {
    return <Hoc forwardedRef={ref} {...props} />
  }
  forwardRef.displayName = Comp.name
  return React.forwardRef(forwardRef)
}

export default hoc(FilterProducts)
