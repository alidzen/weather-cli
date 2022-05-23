#!/usr/bin/env node
import { getArgs } from './helpers/args.js'

(() => {
    console.log(getArgs(process.argv))
})()