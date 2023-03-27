import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';

const Cart = () => {
    const test = useContext(CartContext);
    // const { cartList } = useContext(CartContext);
    console.log(test)

    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            
            <ContentCart>
                {
                    (test.cartList.length === 0) ? <p>Tu carrito está vacío</p> : <button onClick={test.clearCart}>DELETE ALL</button>
                }
              {
                test.cartList.map((item, index) => (
                  <Product key={index}>
                    <ProductDetail>
                        <ImageCart src={item.image} />
                        <Details>
                        <span>
                            <b>Product:</b> {item.title}
                        </span>
                        <button onClick={() => test.deleteItem(item.id)}>DELETE PRODUCT</button>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                        <ProductAmount>{item.qty} items</ProductAmount>
                        </ProductAmountContainer>
                        <ProductPrice>$ {item.price} each</ProductPrice>
                    </PriceDetail>
                    </Product>
                ))
              }
                    
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;