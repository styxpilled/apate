import { generate, javascript, pokemon, python } from "./index";

const config = {
  dictionaries: [
    javascript,
    pokemon,
    python,
  ],
  separator: ', ',
  length: 10,
};

const output = generate(config);
console.log(output);