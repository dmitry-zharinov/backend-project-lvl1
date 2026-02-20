#!/usr/bin/env node

import runGame from '../src/index.js'
import createEvenGame from '../src/games/even.js'

runGame(createEvenGame())
