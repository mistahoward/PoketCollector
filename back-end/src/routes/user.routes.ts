import express from "express";
import UserController from "../controllers/user.controller";
import passport from "passport";

const UserRouter = express.Router();

passport.serializeUser((user, cb) => {
	process.nextTick(() => {
		cb(null, user);
	})
});

passport.deserializeUser((user: Express.User, cb) => {
	process.nextTick(() => {
		cb(null, user);
	})
});

UserRouter.post("/register", async (req, res) => {
	const controller = new UserController();
	const response = await controller.createUser(req.body);
	return res.send(response);
});

UserRouter.post("/login", async (req, res) => {
	const controller = new UserController();
	const response = await controller.login(req.body);
	return res.send(response);
});

export default UserRouter;
