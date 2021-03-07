'use strict'

module.exports.hi = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'hello from sls_2 framework v3!',
        input: event,
      },
      null,
      2
    ),
  }
}
