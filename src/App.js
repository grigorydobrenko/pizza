import './App.css';
import './scss/app.scss'
import Header from "./components/Header";
import Main from "./components/pages/Main";
import NotFound from "./components/pages/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/pages/Cart";


function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Main/>}/>
                        <Route path={'/cart'} element={<Cart/>}/>
                        <Route path={'/*'} element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
