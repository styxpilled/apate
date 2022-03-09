import { Config } from "./types";
export function generate(config: Config): string | string[] {
  const { dictionaries, separator, length, mode, end } = config;
  const words = new Set<string>();
  while (words.size < length) {
    const dictionary = dictionaries[Math.floor(Math.random() * dictionaries.length)];
    words.add(dictionary[Math.floor(Math.random() * dictionary.length)]);
  }
  if (mode === 'string') {
    return [...words].join(separator).concat(end);
  }
  else {
    return [...words];
  }
}