export const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'hello from sls framework v6',
        input: event,
      },
      null,
      2
    ),
  }
}
