import './App.css';
import './scss/app.scss'
import Header from "./components/Header";
import Main from "./components/pages/Main";
import NotFound from "./components/pages/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/pages/Cart";
import {useState} from "react";
import React from 'react';


export const SearchContext = React.createContext()


function App() {
    const [searchValue, setSearchValue] = useState('')


    return (
        <div>
            <div className="App">
                <div className="wrapper">
                    <SearchContext.Provider value={{searchValue, setSearchValue}}>
                        <Header/>
                        <div className="content">
                            <Routes>
                                <Route path={'/'} element={<Main/>}/>
                                <Route path={'/cart'} element={<Cart/>}/>
                                <Route path={'/*'} element={<NotFound/>}/>
                            </Routes>
                        </div>
                    </SearchContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default App;
