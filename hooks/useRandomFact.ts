import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function useRandomFact() {
  const { data, error } = useSWR(
    `https://uselessfacts.jsph.pl/random.json`,
    (url) => fetcher(url)
  );

  return {
    fact: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useRandomFact;
