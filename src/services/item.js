// Quais açoes o meu carrinho pode fazer?

// Casos de uso
// -> criar item com subtotal
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
}

export default createItem;
