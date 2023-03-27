import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import { CartContext } from "../contexts/CartContext";

const Home = () => {
    return (
        <CartContext.Provider value={['Coca Cola', 'Pepsi']}>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
        </CartContext.Provider>
    );
}

export default Home;