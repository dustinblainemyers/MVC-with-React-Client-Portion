import getWithAwait from "./getWithAwait";
import JsonSort from "./JsonSort";

const jsonFromApi = async (setter, endpoint, sortKey) => {
  try {
    const data = await getWithAwait(endpoint);
    if (sortKey) {
      data.sort(JsonSort(sortKey));
    }

    setter(data);
  } catch (error) {
    console.error("ERROR:", error);
    return error;
  }
};

export default jsonFromApi;
