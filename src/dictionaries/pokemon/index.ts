import gen1 from "./gen1";
import gen2 from "./gen2";
import gen3 from "./gen3";
import gen4 from "./gen4";
import gen5 from "./gen5";
import gen6 from "./gen6";
import gen7 from "./gen7";
import gen8 from "./gen8";

import curated from "./curated";

/**
 * Pokemon wordlist.
 * @property curated - Curated list of pokemon.
 * @property gen1 - Gen 1 Pokemon.
 * @property gen2 - Gen 2 Pokemon.
 * @property gen3 - Gen 3 Pokemon.
 * @property gen4 - Gen 4 Pokemon.
 * @property gen5 - Gen 5 Pokemon.
 * @property gen6 - Gen 6 Pokemon.
 */
const pokemon = {
  /** All pokemon. */
  all: [
    ...gen1,
    ...gen2,
    ...gen3,
    ...gen4,
    ...gen5,
    ...gen6,
    ...gen7,
    ...gen8,
  ],
  /** Curated list of pokemon. */
  curated,
  /** Gen 1 Pokemon. */
  gen1,
  /** Gen 2 Pokemon */
  gen2,
  /** Gen 3 Pokemon */
  gen3,
  /** Gen 4 Pokemon */
  gen4,
  /** Gen 5 Pokemon */
  gen5,
  /** Gen 6 Pokemon */
  gen6,
  /** Gen 7 Pokemon */
  gen7,
  /** Gen 8 Pokemon */
  gen8,
};

export default pokemon;