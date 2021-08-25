import React, { Component } from 'react'
import './App.css'
import SearchInput from './components/SearchInput/SearchInput'
import FilterProducts from './components/FilterProducts/FilterProducts'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      isStock: false,
    }
    this.search = React.createRef()
  }

  onChangeSearch = (event) => {
    this.setState({
      search: event.target.value,
    })
  }
  onChangeStock = (event) => {
    this.setState({
      isStock: !this.state.isStock,
    })
  }

  componentDidMount(){
    this.search.current.focus()
    console.log(this.search.current);
  }

  render() {
    return (
      <div className='App'>
        <SearchInput
          text='Показывать товары только в наличии'
          search={this.state.search}
          isStock={this.state.isStock}
          onChangeSearch={this.onChangeSearch}
          onChangeStock={this.onChangeStock}
          sRef={this.search}
        />
        <FilterProducts products={this.props.products} search={this.state.search} isStock={this.state.isStock} />
      </div>
    )
  }
}

export default App
