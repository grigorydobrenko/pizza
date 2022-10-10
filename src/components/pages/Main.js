import React, {useEffect, useState} from 'react';
import Categories from "../Categories";
import Sort from "../Sort";
import Skeleton from "../pizza-item/Skeleton";
import Item from "../pizza-item/Item";

const Main = () => {
    const [pizzaItems, setPizzaItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://633ffea8d1fcddf69cae7938.mockapi.io/items')
            .then(res => res.json())
            .then(res => {
                setPizzaItems(res)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ?
                    [...new Array(9)].map((_, index) => <Skeleton key={index}/>) :
                    pizzaItems.map(pizzaItem => <Item
                        key={pizzaItem.id}
                        {...pizzaItem}
                    />)
                }
            </div>
        </div>

    );
};

export default Main;