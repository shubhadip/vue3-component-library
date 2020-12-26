import { Option, SortInterface } from "../interfaces";

export const sortUtility = (
  sortConfig: SortInterface,
  dataSource: Option,
  sortStratergies: Option
): Option => {
  const data = (dataSource[sortConfig.dataSource] as unknown) as Array<Option>;
  const { sortingKey, ordering, type } = sortConfig;
  if (type === "key") {
    return data.sort((a: Option, b: Option) => {
      const sortKey: string = sortingKey || "";
      return ordering === "ascending"
        ? a[sortKey] - b[sortKey]
        : b[sortKey] - a[sortKey];
    });
  }
  const { sortFunction = "" } = sortConfig;
  return sortStratergies[sortFunction](data);
};
