export const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'hello from sls framework v7',
        input: event,
      },
      null,
      2
    ),
  }
}
