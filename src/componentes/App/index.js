import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Corpo from "../Corpo";


export default function App(){


    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Corpo/>}></Route>
            </Routes>        
        </BrowserRouter>
    );
}