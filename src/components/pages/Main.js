import React, {useEffect, useState} from 'react';
import Categories from "../Categories";
import Sort from "../Sort";
import Skeleton from "../pizza-item/Skeleton";
import Item from "../pizza-item/Item";

const Main = ({inputValue}) => {
    const [pizzaItems, setPizzaItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState({name: 'популярности', sortName: 'rating'})


    useEffect(() => {
        setIsLoading(true)

        const category = categoryId > 0 ? `category=${categoryId}` : ''

        const isAsc = sortType.sortName[0] === '-' ? 'asc' : 'desc'
        const sort = `sortBy=${sortType.sortName.replace('-', '')}&order=${isAsc}`

        const search = inputValue? `search=${inputValue}` : ''


        fetch(`https://633ffea8d1fcddf69cae7938.mockapi.io/items?${category}&${sort}&${search}`)
            .then(res => res.json())
            .then(res => {
                setPizzaItems(res)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, inputValue])


    const skeleton = [...new Array(9)].map((_, index) => <Skeleton key={index}/>)
    const pizzas = pizzaItems.map(pizzaItem =>
        <Item
            key={pizzaItem.id}
            {...pizzaItem}
        />)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} setCategoryId={setCategoryId}/>
                <Sort value={sortType} setSortType={setSortType}/>
            </div>
            <h2 className="content__title">Пицца</h2>
            <div className="content__items">
                {isLoading ?
                    skeleton :
                    pizzas
                }
            </div>
        </div>

    );
};

export default Main;