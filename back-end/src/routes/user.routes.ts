import express from "express";
import UserController from "../controllers/user.controller";
import passport from "passport";
import { User } from "../models";

const UserRouter = express.Router();

UserRouter.post("/register", async (req, res) => {
	const controller = new UserController();
	const response = await controller.createUser(req.body);
	return res.send(response);
});

UserRouter.post("/login", async (req, res) => {
	const controller = new UserController();
	const response = await controller.login(req.body);
	if (response instanceof User) {
		const user = response;
		req.login(user, (err) => {
			if (err) {
				return res.send({
					success: false,
					error: err
				});
			} else {
				return res.send({
					success: true
				});
			}
		});
	} else {
		return res.send({
			success: false,
			error: 'Login failed'
		});	
	}
});

export default UserRouter;
