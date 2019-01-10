const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')

module.exports = new GraphQLScalarType({
  name: 'Date',
  description: '自定义时间类型',
  parseValue(value) {
    return new Date(value)
  },
  serialize(value) {
    const date = new Date(value)
    return date.getTime()
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10)
    }
    return null
  }
})
