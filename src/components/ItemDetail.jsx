import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            item.thumbnail
            ? 
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.thumbnail} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        {/* <Desc>{item.description}</Desc> */}
                        <Price>$ {item.price}</Price>
                        <Desc>{item.available_quantity} unidades en stock</Desc>
                    </InfoContainer>
                    <ItemCount stock={item.available_quantity} initial={1} onAdd={onAdd} />
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;