const httpStatus = require('http-status')

/** */
class Response {
  /**
   * @param {Response} res
   */
  constructor(res) {
    this.res = res
    this.data = null
    this.status = httpStatus.OK
    this.message = httpStatus[httpStatus.OK]
    this.pagination = null
  }

  /**
   * @param {Object} data
   * @return {Object}
   */
  setData(data) {
    this.data = data
    return this
  }

  /**
   * @param {int} total
   * @param {int} limit
   * @param {int} page
   * @return {Object}
   */
  setPagination(total, limit, page) {
    const _limit = limit ? parseInt(limit) : 1
    const _page = page ? parseInt(page) : 1
    const _total = total ? parseInt(total) : 0
    const _totalPages = Math.ceil(_total / _limit)
    this.pagination = {
      currentPage: _page,
      totalItems: _total,
      totalPages: _totalPages,
    }
    return this
  }

  /**
   * @param {httpStatus} status
   * @return {Object}
   */
  setStatus(status) {
    this.status = status
    return this
  }

  /**
   * @param {String} message
   * @return {Object}
   */
  setMessage(message) {
    this.message = message
    return this
  }

  /**
   * @return {Object}
   */
  get() {
    if (this.pagination) {
      return this.res.status(this.status).json({
        data: this.data,
        pagination: this.pagination,
        header: {
          status: this.status,
          message: this.message,
        },
      })
    }
    return this.res.status(this.status).json({
      data: this.data,
      header: {
        status: this.status,
        message: this.message,
      },
    })
  }
}

module.exports = Response
