export interface Config {
  dictionaries: string[][];
  separator?: string;
  end?: string;
  mode?: 'string' | 'array';
  length?: number;
}