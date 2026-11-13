// Quais açoes o meu carrinho pode fazer?

// Casos de uso
// adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// deletar item do carrinho
async function deleteItem(userCart, name) {
    let index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// remover um item - diminui um item
async function removeItem(userCart, item) {
    //1. encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    console.log(indexFound);

    // 2. caso não encontre o item
    if (indexFound === -1) {
        console.log("Item não encontrado!");
        return;
    }

    //3. item > 1 subtrair um item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    //4. se item == 1 deleta o item
    if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart(userCart) {
    console.log("Shopee Cart list:");
    userCart.forEach((item, index) => {
        console.log(
            `${index + 1}: ${item.name} - R$: ${item.price} | Quantidade: ${item.quantity} | Subtottal = R$: ${item.subtotal()}`,
        );
    });
}

// calcular o total
async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS: ");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🎁Total: ${result}`);
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
