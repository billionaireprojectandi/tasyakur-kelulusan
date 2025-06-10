export const useParams = (param: String) => {
  const url = window.location.search;
  return new URLSearchParams(url).get(param as string);
};
