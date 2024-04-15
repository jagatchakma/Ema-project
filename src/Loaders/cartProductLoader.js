import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const product = await loadedProducts.json();


    const storeCart = getShoppingCart();
    const savedCart = [];

    for (const id in storeCart) {
        const addedProduct = product.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
}

export default cartProductLoader