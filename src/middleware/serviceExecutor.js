const execute = async (api) => {
  const { requestUrl, method } = api;
  return await fetch(requestUrl, {}).then((result) => result.json());
};

export default execute;
