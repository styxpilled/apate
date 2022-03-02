export interface Config {
  dictionaries: string[][];
  separator?: string;
  length?: number;
}

export function generate(config: Config): string {
  const { dictionaries, separator, length } = config;
  const words = new Set();
  while (words.size < length) {
    const dictionary = dictionaries[Math.floor(Math.random() * dictionaries.length)];
    words.add(dictionary[Math.floor(Math.random() * dictionary.length)]);
  }
  return Array.from(words).join(separator || '');
}