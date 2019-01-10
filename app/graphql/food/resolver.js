module.exports = {
  Query: {
    foods(root, { page, per_page }, ctx) {
      return ctx.connector.food.fetchFoods(page, per_page)
    }
  },
  User: {
    foods(root, _, ctx) {
      return ctx.connector.food.fetchByUserId(root.id)
    }
  },
  Mutation: {
    createdFood(root, { url, address, food_name, des }, ctx) {
      return ctx.connector.food.create(url, address, food_name, des)
    },
    updateFood(root, { id, url, address, food_name, des }, ctx) {
      return ctx.connector.food.update(id, url, address, food_name, des)
    },
    deleteFood(root, { id }, ctx) {
      return ctx.connector.food.delete(id)
    }
  }
}
