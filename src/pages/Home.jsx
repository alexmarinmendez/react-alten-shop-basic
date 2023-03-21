import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Home;