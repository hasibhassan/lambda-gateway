const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'hello from sls_1 framework v5',
        input: event,
      },
      null,
      2
    ),
  }
}

export default hello
