import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <ContentCart>
                    <Product>
                    <ProductDetail>
                        <ImageCart src="https://i.imgur.com/z0hC49v.jpg" />
                        <Details>
                        <span>
                            <b>Product:</b> JESSIE THUNDER SHOES
                        </span>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                        <ProductAmount>2 items</ProductAmount>
                        </ProductAmountContainer>
                        <ProductPrice>$ 30 each</ProductPrice>
                    </PriceDetail>
                    </Product>
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;