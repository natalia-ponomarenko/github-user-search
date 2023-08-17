import { BASE_URL } from "./constants";

export const fetchUser = async (username: string) => {
  const response = await fetch(`${BASE_URL}/${username}`);

  if (!response.ok) {
    throw new Error(`Error fetching user data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};
