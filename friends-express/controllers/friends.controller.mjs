import { friends as model } from '../models/friends.model.mjs'

export function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name',
    })
  }

  const newFriend = {
    name: req.body.name,
    id: model.length + 1,
  }
  model.push(newFriend)

  res.json(newFriend)
}

export function getFriends(req, res) {
  console.log(model)
  res.json(model)
}

export function getFriend(req, res) {
  console.log(req.params)
  const friendId = Number(req.params.friendId)
  console.log('friendId', friendId)
  const friend = model.find((f) => f.id === friendId)
  if (friend) {
    res.status(200).json(friend)
  } else {
    res.status(404).json({
      error: 'Friend does not exist',
    })
  }
}
