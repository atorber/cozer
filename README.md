# Cozer

> 即将发布

## 概述

Cozer非官方coze SDK，基于coze API快速接入自己的业务系统

- 获取bot列表
- 获取bot详情
- 启停bot
- 添加bot
- 对话bot
- 查询bot对话列表
- 查询bot对话历史
- ...

## 快速入门

### 安装依赖

```shell
npm i cozer
```

### 配置环境变量

在根目录创建一个名称为.env的配置文件

```yaml
COZE_ENDPOINT=https://api.coze.cn/open_api/v2/chat
COZE_TOKEN='coze的API token'
BOT_ID='coze的bot id'
```

### 示例代码

```typescript
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
```
