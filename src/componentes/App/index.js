import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Filmes from "../Filmes";
import Sessao from "../Sessao"


export default function App(){


    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Filmes/>}></Route>
                <Route path="/sessoes/:idFilme" element={<Sessao/>}></Route>
            </Routes>        
        </BrowserRouter>
    );
}