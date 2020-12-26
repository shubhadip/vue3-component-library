import { IOption, ISortInterface } from "../interfaces";

export const sortUtility = (
  sortConfig: ISortInterface,
  dataSource: IOption,
  sortStratergies: IOption
): IOption => {
  const data = (dataSource[sortConfig.dataSource] as unknown) as Array<IOption>;
  const { sortingKey, ordering, type } = sortConfig;
  if (type === "key") {
    return data.sort((a: IOption, b: IOption) => {
      const sortKey: string = sortingKey || "";
      return ordering === "ascending"
        ? a[sortKey] - b[sortKey]
        : b[sortKey] - a[sortKey];
    });
  }
  const { sortFunction = "" } = sortConfig;
  return sortStratergies[sortFunction](data);
};
