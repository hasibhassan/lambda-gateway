export async function hello(event) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'hello from sls_1 framework v4!',
        input: event,
      },
      null,
      2
    ),
  }
}
