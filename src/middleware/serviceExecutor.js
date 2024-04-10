const execute = async (api) => {
  const { body, method, requestUrl } = api;
  return await fetch(requestUrl, {
    method,
    body,
    headers: new Headers({ "content-type": "application/json" }),
  }).then((result) => {
    if (result.status >= 400) {
      throw result.statusText;
    }
    return result.json();
  });
};

export default execute;
