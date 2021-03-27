# seedable-random

This module generates a random number between 0 (included) and 1 (excluded). It can be seeded.

## How to use it 🚀

Using this module is pretty straightforward.

```
const random = seedableRandom();
```

## Seeding with a phrase 🌱

You can seed the function with a phrase to generate the same output.

```
const random = seedableRandom('This is my passphrase');
```

## Under the hood 🙈

This module uses the pearson hash function to generate an 8 bit number. If the module is used without a phrase, the current EPOCH date is used as phrase.

## Beware ☠

The function pearson hash function only returns an 8 bit number. Therefore the random function pretty discrete. It can 'only' return 255 possible values between 0 and 1.
