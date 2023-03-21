import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        // customFetch(500, products.find(item => item.id === parseInt(idItem)))
        //     .then(result => setDato(result))
        //     .catch(err => console.log(err))
        fetch(`https://api.mercadolibre.com/items/${idItem}`)
            .then(results => results.json())
            .then(results => setDato(results))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;