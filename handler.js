'use strict'

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'hello from sls framework v3!',
        input: event,
      },
      null,
      2
    ),
  }
}
