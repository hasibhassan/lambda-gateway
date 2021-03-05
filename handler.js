'use strict'

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'sls framework is awesome!',
        input: event,
      },
      null,
      2
    ),
  }
}
