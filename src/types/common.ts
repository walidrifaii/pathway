export type Id = string | number;

export type Nullable<T> = T | null;

export type ApiResponse<T> = {
  data: T;
  error?: string;
};
