#!/usr/bin/env node

import runGame from '../src/index.js'
import createCalcGame from '../src/games/calc.js'

runGame(createCalcGame())
