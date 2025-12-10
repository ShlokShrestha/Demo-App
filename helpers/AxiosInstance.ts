import axios, { AxiosError, AxiosResponse } from "axios";
import { PostApiParams } from "@/types/type";

const API_ROOT: string = "https://dummyjson.com";

export default API_ROOT;

export const instance = axios.create({
  baseURL: `${API_ROOT}`,
  headers: {
    "Content-type": "Application/json",
  },
});
export const getApiData = async <T>(
  url: string,
  params?: Record<string, any>
): Promise<AxiosResponse<T>> => {
  try {
    const response = await instance({
      method: "GET",
      url: `${url}`,
      params: params,
      transformResponse: [
        function (responseData) {
          return JSON.parse(responseData);
        },
      ],
    });
    return response;
  } catch (error) {
    const err = error as AxiosError;
    throw err;
  }
};
export const postApiData = async <T>({ url, formData }: PostApiParams<T>) => {
  try {
    const response = await instance({
      method: "POST",
      url: `${url}`,
      data: formData,
      transformResponse: [
        function (responseData) {
          return JSON.parse(responseData);
        },
      ],
    });
    return response;
  } catch (error) {
    const err = error as AxiosError<Record<string, string>>;
    return err.response;
  }
};
