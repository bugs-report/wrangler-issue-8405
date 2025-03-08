import { Hono } from 'hono'
import { Jieba } from '@node-rs/jieba'

const app = new Hono()

app.get('/', (c) => {
  const jieba = new Jieba();
  return c.json(jieba.cutAll("Hello World"))
})

export default app
