import './App.css';
import './scss/app.scss'
import Header from "./components/Header";
import Main from "./components/pages/Main";
import NotFound from "./components/pages/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/pages/Cart";
import {useState} from "react";


function App() {
    const [inputValue, setInputValue] = useState('')

    return (
        <div className="App">
            <div className="wrapper">
                <Header inputValue={inputValue} setInputValue={setInputValue}/>
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Main inputValue={inputValue}/>}/>
                        <Route path={'/cart'} element={<Cart/>}/>
                        <Route path={'/*'} element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
