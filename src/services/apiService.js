const BASE_URL = "https://rickandmortyapi.com/api";

export const findCharacters = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/character/?page=${page}`);

    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
