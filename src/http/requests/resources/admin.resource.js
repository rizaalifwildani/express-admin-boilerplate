/** */
class AdminResource {
  /**
   * @param {Object} data
   * @return {Object} object
   */
  static resource(data) {
    return {
      id: data.id,
      role: data.role.name,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
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

module.exports = AdminResource
