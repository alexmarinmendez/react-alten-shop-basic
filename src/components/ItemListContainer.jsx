import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    //ComponentDidMount()
    useEffect(() => {
        // fetch('https://api.mercadolibre.com/sites/MLA/search?q=ordenador')
        //     .then(results => results.json())
        //     .then(results => setDatos(results.results))
        //     .catch(error => console.log(error))
        axios('https://api.mercadolibre.com/sites/MLA/search?q=televisor')
            .then(results => setDatos(results.data.results))
            .catch(error => console.log(error))
    }, []);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;