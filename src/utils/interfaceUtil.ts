export interface PropsForm<T = string | number> {
  name: string;
  label?: string;
  options?: T[];
  getOptionLabel?: T[];
  [key: string]: any;
}
