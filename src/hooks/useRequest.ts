import useSnackbar from "components/Snackbar/hook/useSnackbar";
import { Dispatch, SetStateAction, useState } from "react";

type UseRequestParams<T> = {
  callback: (...args: any[]) => Promise<any>;
  arguments?: any[];
  extraErrorCheck?: (error: any) => void;
  handleResponse?: () => void;
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

  const { openSnackbar } = useSnackbar();

  const execute = async (...args: any[]): Promise<T | undefined> => {
    if (isLoading && !initialLoading) {
      return;
    }
    setIsLoading(true);

    try {
      const result = await callback(...(args.length > 0 ? args : initialArgs));
      setData(result);
      handleResponse && handleResponse();
      return result;
    } catch (error: any) {
      openSnackbar(error.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { data, setData, isLoading, execute };
}
