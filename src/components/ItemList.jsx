import Item from "./Item";
import { ProductsContainer } from './styledComponents';

const ItemList = ({ items }) => {
    return (
        <ProductsContainer>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} title={item.title} price={item.price} pictureUrl={item.thumbnail} stock={item.available_quantity} />)
            : <p>Cargando...</p>
        }
        </ProductsContainer>
    );
}

export default ItemList;