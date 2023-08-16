import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../utils/fetchUser";
import { User } from "../types/User";

export const useUserQuery = (value: string) => {
  const query = useQuery<User | null, Error>(
    ["userData", value],
    async () => {
      if (value) {
        const lowerCasedValue = value.toLowerCase().trim();
        const data = await fetchUser(lowerCasedValue);
        return data;
      }
      return null;
    },
    {
      enabled: !!value,
      retry: false,
    }
  );
  return {
    ...query,
    isLoading: query.isLoading && query.fetchStatus !== "idle",
  };
};
