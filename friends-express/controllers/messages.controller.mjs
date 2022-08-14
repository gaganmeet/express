export function getMessages(req, res) {
  res.send('<ul><li>Message 1</li><li>Message 2</li><li>Message 3</li></ul>')
}

export function postMessage(req, res) {
  res.send('<h1>Message Received</h1>')
}
