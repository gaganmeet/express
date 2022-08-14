import express from 'express'
import {
  getMessages,
  postMessage,
} from '../controllers/messages.controller.mjs'

const messagesRouter = express.Router()

messagesRouter.get('/', getMessages)
messagesRouter.post('/', postMessage)

export default messagesRouter