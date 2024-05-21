const execute = async (api) => {
  const { body, method, requestUrl } = api;
  // return await fetch(requestUrl, {
  //   method,
  //   body,
  //   headers: new Headers({ "content-type": "application/json" }),
  // })
  //   .then((result) => {
  //     if (result.status >= 400) {
  //       throw result.statusText;
  //     }
  //     return result.text();
  //   })
  //   .then((json) => {
  //     if (!json) {
  //       return;
  //     }
  //     return JSON.parse(json);
  //   });
  const rawResponse = await fetch(requestUrl, {
    method,
    body,
    headers: new Headers({ "content-type": "application/json" }),
  });
  const rawJson = await rawResponse.text();
  const json = rawJson ? JSON.parse(rawJson) : {};
  if (rawResponse.status >= 400) {
    throw json;
  }
  return json;
};

export default execute;
