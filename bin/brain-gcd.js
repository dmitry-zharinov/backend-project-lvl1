#!/usr/bin/env node

import runGame from '../src/index.js'
import createGcdGame from '../src/games/gcd.js'

runGame(createGcdGame())
