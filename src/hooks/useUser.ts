import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../utils/fetchUser";
import { User } from "../types/User";
import { setUser } from "../redux/features/user/user";
import { useAppDispatch } from "../redux/hooks";

export const useUserQuery = (value: string) => {
  const dispatch = useAppDispatch();

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
      onSuccess: (data) => {
        if (data) {
          dispatch(setUser(data));
        }
      },
    }
  );

  return {
    ...query,
    isLoading: query.isLoading && query.fetchStatus !== "idle",
  };
};
