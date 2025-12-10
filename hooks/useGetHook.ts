import { useQuery, type QueryKey } from "@tanstack/react-query";
import { getApiData } from "../helpers/AxiosInstance";

interface UseGetHookProps<T> {
  queryKey: QueryKey;
  url: string;
  params?: T | any;
  enabled?: boolean;
}

const useGetHook = <T,>({
  queryKey,
  url,
  params,
  enabled = true,
}: UseGetHookProps<T>) => {
  const { isLoading, isFetching, error, data, refetch } = useQuery<T>({
    queryKey,
    queryFn: async () => {
      const response = await getApiData<T>(url, params);
      return response.data;
    },
    refetchOnWindowFocus: false,
    placeholderData: (previousData) => previousData,
    enabled,
  });

  return { isLoading, isFetching, error, data, refetch, enabled };
};

export default useGetHook;
