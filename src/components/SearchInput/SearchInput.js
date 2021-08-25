import React from 'react'
import './SearchInput.css'

function SearchInput(props) {
  return (
    <div className='search-bar'>
      <form>
        <input
          type='text'
          value={props.search}
          onChange={props.onChangeSearch}
          className='search-bar__input'
          placeholder='Search'
          ref={props.sRef}
        />
        <label htmlFor='show_stock'>
          <input
            type='checkbox'
            name='show_stock'
            id='show_stock'
            checked={props.isStock}
            onChange={props.onChangeStock}
          />
          <span>{props.text}</span>
        </label>
      </form>
    </div>
  )
}

export default SearchInput
