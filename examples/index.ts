#!/usr/bin/env -S node --no-warnings --loader ts-node/esm
/* eslint-disable camelcase */
/* eslint-disable sort-keys */
import 'dotenv/config.js'
import { CozeBot, ChatV2Req } from '../src/coze.js'

const coze_token = process.env['COZE_TOKEN'] || ''
const bot_id = process.env['BOT_ID'] || ''
const cozeBot = new CozeBot({
    api_key: coze_token,
    bot_id,
})

const data: ChatV2Req = {
    conversation_id: '1234567890',
    user: '张三',
    query: '你好,你是谁?',
    history_count: 5,
    stream: false,
}

const chatResp = await cozeBot.chat(data)
const urls = chatResp.extractImageUrls()
const answers = chatResp.extractAnswer()

console.info('urls:', urls)
console.info('answers:', answers)

