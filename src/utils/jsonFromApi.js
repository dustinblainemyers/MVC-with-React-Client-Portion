import getWithAwait from "./getWithAwait";
import JsonSort from "./JsonSort";

const jsonFromApi = async (setter, endpoint, sortKey) => {
  const data = await getWithAwait(endpoint);
  if (sortKey) {
    data.sort(JsonSort(sortKey));
  }

  setter(data);
};

export default jsonFromApi;
