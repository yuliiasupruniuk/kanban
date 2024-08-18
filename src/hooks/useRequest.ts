import { Dispatch, SetStateAction, useState } from "react";

type UseRequestParams<T> = {
  callback: (...args: any[]) => Promise<any>;
  arguments?: any[];
  extraErrorCheck?: (error: any) => void;
  handleResponse: () => void;
  initialLoading?: boolean;
};

type UseRequestReturn<T> = {
  data: T | undefined;
  setData: Dispatch<SetStateAction<T | undefined>>;
  isLoading: boolean;
  execute: (...args: any[]) => Promise<T | undefined>;
};

export default function useRequest<T>({
  callback,
  arguments: initialArgs = [],
  handleResponse,
  initialLoading = false,
}: UseRequestParams<T>): UseRequestReturn<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(initialLoading);

  const execute = async (...args: any[]): Promise<T | undefined> => {
    if (isLoading && !initialLoading) {
      return;
    }
    setIsLoading(true);

    try {
      await callback(...(args.length > 0 ? args : initialArgs));

      handleResponse();
      return data;
    } catch (error) {
      showErrorToast();
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  function showErrorToast(message?: string) {
    alert(message);
  }

  return { data, setData, isLoading, execute };
}
