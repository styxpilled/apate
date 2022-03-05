export function generate(config: Config): string | string[] {
  const { dictionaries, separator, length, mode } = config;
  const words = new Set<string>();
  while (words.size < length) {
    const dictionary = dictionaries[Math.floor(Math.random() * dictionaries.length)];
    words.add(dictionary[Math.floor(Math.random() * dictionary.length)]);
  }
  if (mode === 'string') {
    return [...words].join(separator);
  }
  else {
    return [...words];
  }
}