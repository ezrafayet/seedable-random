# seedable-random

This module generates a random number between 0 (included) and 1 (excluded). It can be seeded.

## How to use it

Using this module is pretty straightforward.

```
const random = seedableRandom();
```

## Seeding with a phrase

You can seed a number to generate the same output everytime.

```
const random = seedableRandom('This is my passphrase');
```

## Under the hood

This module uses the Pearson has function to generate an 8 bit number. If the module is used without a phrase, the current EPOCH date is used as phrase.

