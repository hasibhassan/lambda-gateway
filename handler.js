'use strict'

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Github and serverless framework works!',
        input: event,
      },
      null,
      2
    ),
  }
}
