module.exports = app => {
  const { STRING } = app.Sequelize

  const Food = app.model.define('food', {
    url: STRING(64),
    address: STRING(64),
    food_name: STRING(64),
    des: STRING(64)
  })

  return Food
}
