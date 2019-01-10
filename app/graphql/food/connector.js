const _ = require('lodash')

class FoodConnector {
  constructor(ctx) {
    this.ctx = ctx
    this.proxy = this.ctx.app.model.Food
  }

  async fetchByUserId(userID) {
    const foods = await this.proxy
      .findAll({
        where: {
          user_id: userID
        }
      })
      .then(ts => ts.map(u => u.toJSON()))
    return foods
  }

  async fetchFoods(page, per_page) {
    var offset = 1
    if (page === 1) {
      offset = 0
    } else {
      offset = page * 10
    }
    const foods = await this.proxy.findAll({
      offset,
      limit: per_page
    })
    return foods
  }

  async create(url, address, food_name, des) {
    const food = await this.proxy.create(
      _.pickBy({ url, address, food_name, des })
    )
    return food.toJSON()
  }
  async update(id, url, address, food_name, des) {
    await this.proxy.update(_.pickBy({ id, url, address, food_name, des }), {
      where: { id }
    })
    const food = await this.proxy.findOne({ where: { id } })

    return food.toJSON()
  }

  async delete(id) {
    const food = await this.proxy.findOne({ where: { id } })
    const ret = food.toJSON()
    await food.destroy()
    return ret
  }
}

module.exports = FoodConnector
