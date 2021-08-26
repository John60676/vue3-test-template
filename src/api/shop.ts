const _products = [
  { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
  { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5 },
]

export type ProductType = typeof _products

export default {
  async getProducts() {
    await wait(100)
    return _products
  },
}

function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
