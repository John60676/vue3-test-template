import { createStore } from "vuex"
import shop, { ProductType } from "../api/shop"

type StoreType = {
  all: ProductType
}

const store = createStore<StoreType>({
  state() {
    return {
      all: [],
    }
  },
  mutations: {
    setProducts(state, products) {
      state.all = products
    },
    decrementProductInventory(state, { id }) {
      const product = state.all.find(product => product.id === id)!
      product.inventory--
    },
  },
  actions: {
    async getAllProducts({ commit }) {
      const products = await shop.getProducts()
      commit("setProducts", products)
    },
  },
})

export default store
