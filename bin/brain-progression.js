#!/usr/bin/env node

import runGame from '../src/index.js'
import createProgressionGame from '../src/games/progression.js'

runGame(createProgressionGame())
