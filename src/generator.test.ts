import { generate } from './generator';
import { Config } from './types';
import { javascript, pokemon, python } from './dictionaries/index';

const config: Config = {
  dictionaries: [
    javascript,
    pokemon,
    python,
  ],
  separator: ', ',
  mode: 'array',
  length: 3,
};

const output = generate(config);
console.log(output);