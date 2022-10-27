import React, {useEffect, useState} from 'react';
import Categories from "../Categories";
import Sort from "../Sort";
import Skeleton from "../pizza-item/Skeleton";
import Item from "../pizza-item/Item";
import Pagination from "../pagination";
import {SearchContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../../redux/slices/filterSlice";

const Main = () => {
    const [pizzaItems, setPizzaItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const {searchValue} = React.useContext(SearchContext)

    const {categoryId, sortType} = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const handler = (id) => {
        dispatch(setCategoryId(id))
    }


    useEffect(() => {
        setIsLoading(true)

        const category = categoryId > 0 ? `category=${categoryId}` : ''

        const isAsc = sortType.sortName[0] === '-' ? 'asc' : 'desc'
        const sort = `sortBy=${sortType.sortName.replace('-', '')}&order=${isAsc}`

        const search = searchValue ? `search=${searchValue}` : ''

        const content = categoryId === 0 ? `page=${currentPage}&limit=4${category}&${sort}&${search}` : `${category}&${sort}&${search}`

        fetch(`https://633ffea8d1fcddf69cae7938.mockapi.io/items?${content}`)
            .then(res => res.json())
            .then(res => {
                setPizzaItems(res)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage])


    const skeleton = [...new Array(9)].map((_, index) => <Skeleton key={index}/>)
    const pizzas = pizzaItems.map(pizzaItem =>
        <Item
            key={pizzaItem.id}
            {...pizzaItem}
        />)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} setCategoryId={handler}/>
                <Sort/>
            </div>
            <h2 className="content__title">Пицца</h2>
            <div className="content__items">
                {isLoading ?
                    skeleton :
                    pizzas
                }
            </div>
            <Pagination setCurrentPage={setCurrentPage} categoryId={categoryId}/>
        </div>

    );
};

export default Main;