/** */
class RoleResource {
  /**
   * @param {Object} data
   * @return {Object} object
   */
  static resource(data) {
    return {
      id: data.id,
      name: data.name,
      code: data.code,
      description: data.description,
    }
  }

  /**
   * @param {Object} data
   * @return {Promise} array
   */
  static collection(data) {
    const d = []
    data.forEach((r) => {
      d.push(this.resource(r))
    })
    return d
  }
}

module.exports = RoleResource
