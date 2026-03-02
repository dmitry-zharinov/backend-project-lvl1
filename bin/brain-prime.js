#!/usr/bin/env node

import runGame from '../src/index.js'
import createPrimeGame from '../src/games/prime.js'

runGame(createPrimeGame())
