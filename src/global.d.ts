interface Config {
  dictionaries: string[][];
  separator?: string;
  mode?: 'string' | 'array';
  length?: number;
}

interface Dictionary {
  [key: string]: string[];
}