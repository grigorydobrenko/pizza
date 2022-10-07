import './App.css';
import './scss/app.scss'
import Header from "./components/Header";
import Categories from "./components/Categories";
import Item from "./components/Item";
import Sort from "./components/Sort";
import {useEffect, useState} from "react";


function App() {

    const [pizzaItems, setPizzaItems] = useState([])

    useEffect(() => {
        fetch('https://633ffea8d1fcddf69cae7938.mockapi.io/items')
            .then(res => res.json())
            .then(res => setPizzaItems(res))
    }, [])

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories/>
                            <Sort/>
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {pizzaItems.map(pizzaItem => <Item
                                key={pizzaItem.id}
                                {...pizzaItem}
                            />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
