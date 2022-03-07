import { generate } from './generator';
import { javascript, pokemon, python } from './dictionaries/index';

const config: Config = {
  dictionaries: [
    javascript.frontend,
    pokemon.gen1,
    python.lib,
  ],
  separator: ', ',
  mode: 'array',
  length: 3,
};

const output = generate(config);
console.log(output);