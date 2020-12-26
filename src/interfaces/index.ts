export enum MatchType {
  Exact = "exact",
  LessThan = "less_than",
  LessThanOrRqual = "less_than_or_equal",
  GreaterThan = "greater_than",
  GreaterThanOrEqual = "greater_than_or_equal",
  BetweenRange = "between_range"
}

export interface SortInterface {
  type: string;
  label: string;
  dataSource: string;
  sortingKey?: string;
  ordering?: string;
  sortFunction?: string;
  value?: string;
}

export interface Option {
  [x: string]: any;
}

export interface Options {
  label: string;
  value: string;
  startKey?: number;
  endKey?: number;
}

export interface FilterInterface {
  label: string;
  type: string;
  options: any;
  dataSource: string;
  filterKey: string;
  matchType: MatchType;
  value?: string[] | number[] | boolean[] | string | number;
  filterFunction?: string;
}

export interface FilterPayload {
  filterConfig: FilterInterface;
}
