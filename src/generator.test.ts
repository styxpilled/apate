import { Config } from "./types";
import { generate } from './generator';
import { javascript, pokemon, python } from './dictionaries/index';

const config: Config = {
  dictionaries: [
    javascript.frontend,
    pokemon.all,
    python.lib,
  ],
  separator: ', ',
  end: '.',
  mode: 'string',
  length: 3,
};

const output = generate(config);
console.log(output);