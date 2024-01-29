import React, { Component } from "react";
import CardList from '../../../Components/Carousels/CardList';
import SearchBox from '../../../Components/Carousels/SearchBox';
import Scroll from '../../../Components/Carousels/Scroll';
import { products } from "../../../Components/Carousels/Products";


import './Main.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        this.setState({ products });
    }
    onSearchChange = (event) => {
        this.setState({ searchfield : event.target.value });
    }

    render() {
        const { products, searchfield } = this.state;
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        return !products.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Product Catalog</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList products={filteredProducts} />
                </Scroll>
            </div>
        );
    }
}

export default App;

