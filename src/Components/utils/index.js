const totalPrice = (products) => products.reduce((sum, product) => sum + product.price, 0)

export { totalPrice }