#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import {
  test,
}             from 'tstest'

import * as plugins             from '../src/mod.js'

test('plugin name', async t => {
  for (const plugin of Object.values(plugins)) {
    if (typeof plugin !== 'function') {
      continue
    }

    if (plugin.name === 'validatePlugin') {
      continue  // our helper functions
    }

    if (plugin.name === 'messagePrompter') {
      continue  // helper function
    }
  }
  console.info('plugin.name:', t)
})
