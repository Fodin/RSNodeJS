import { Router } from 'express';
import User from './user.model.js';
import * as usersService from './user.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async(req, res) => {
  // console.log("Create: ", req.body);
  const user = await usersService.create(req.body);
  // console.log("Create: ", user);
  res.status(201).json(User.toResponse(user));
})

router.route('/:id').get(async(req, res) => {
  // console.log("To find:", req.params.id);
  const user = await usersService.getById(req.params.id);
  console.log(req.params.id, user);
  if(user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.status(404).send("User not found");
  }
})

export default router;
