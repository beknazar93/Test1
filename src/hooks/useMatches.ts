import useSWR from "swr";

const API_URL = "https://app.ftoyd.com/fronttemp-service/fronttemp"; // Ваш endpoint

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Ошибка: не удалось загрузить информацию");
  }
  const data = await response.json();
  return data.data.matches; // Массив матчей
};

export function useMatches() {
  const { data, error, isLoading, mutate } = useSWR(API_URL, fetcher);

  // Кнопка "Обновить" 
  function refresh() {
    mutate(undefined, { revalidate: true });
  }

  return {
    matches: data || [],
    isLoading,
    isError: !!error,
    refresh,
  };
}
