/** */
class Repository {
  /**
   * @param {Model} model
   * @param {Array<String>} relationModel array relation name such as packages.
  */
  constructor(model, relationModel) {
    this.model = model
    this.relationModel = relationModel
  }

  /**
   * @param {Object} where
   * @return {Promise} array
  */
  async findAll(where) {
    return this.model.findAll({
      include: this.relationModel,
      where,
    }).then((res) => res).catch((err) => {
      console.log('Error :', err)
      return []
    })
  }

  /**
   * @param {int} limit
   * @param {int} page
   * @param {Object} where
   * @return {Promise} array
  */
  async findAllAndPaginate(limit, page, where) {
    const _limit = limit ? parseInt(limit) : 10
    const _page = page ? parseInt(page) : 1
    let _offset = 0
    if (page > 1) {
      _offset = _page * _limit
    }
    return this.model.findAndCountAll({
      include: this.relationModel,
      where,
      limit: _limit,
      offset: _offset,
    }).then((res) => res).catch((err) => {
      console.log('Error :', err)
      return null
    })
  }

  /**
   * @param {Object} where
   * @return {Promise} object | null
  */
  async findOne(where) {
    return this.model.findOne({
      include: this.relationModel,
      where,
    }).then((res) => res).catch((err) => {
      console.log('Error :', err)
      return null
    })
  }

  /**
   * @param {String} id
   * @return {Promise} object | null
  */
  async findByID(id) {
    return this.model.findByPk(id, {
      include: this.relationModel,
    }).then((res) => res).catch((err) => {
      console.log('Error :', err)
      return null
    })
  }

  /**
   * @param {Object} data
   * @return {Promise} object | null
  */
  async create(data = {}) {
    return this.model.create(data).then((res) => res.dataValues).catch((err) => {
      console.log('Error :', err)
      return null
    })
  }
}

module.exports = Repository
