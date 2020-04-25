import getWithAwait from "./getWithAwait";

const jsonFromApi = async (setter, endpoint) => {
  const data = await getWithAwait(endpoint);

  setter(data);
};

export default jsonFromApi;
