import React from 'react';
import Card from './Card';


const CardList = ({ products }) => {
    return (
        <div style={{ display:'flex',  flexWrap:'wrap', justifyContent:'center' }} >
            {
            products.map((product, i) => {
                return (
                    <Card 
                        key={products[i].id}
                        id={products[i].name}
                        name={products[i].name}
                        url={products[i].url}
                    />
                );
            })
        }
        </div>
    );
}

export default CardList;
