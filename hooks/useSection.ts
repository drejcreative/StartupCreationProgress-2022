import useSWR, { Fetcher } from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function useSection() {
  const { data, error } = useSWR(`http://localhost:3000/api/section`, (url) =>
    fetcher(url)
  );

  return {
    sections: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useSection;
