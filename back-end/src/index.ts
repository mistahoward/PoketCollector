import express, { Application } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import session from 'express-session';

import cors from 'cors';

import Router from './routes';
import AppDataSource from './config/database';
const PORT = process.env.PORT || 8000;

import passport from 'passport';
import passportLocal from 'passport-local';

const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));

app.use(
	session({
		store: new (require('connect-pg-simple')(session))(),
		secret: process.env.SESSION_SECRET ?? '',
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 7,
			sameSite: true,
			secure: false, // ENABLE ONLY ON HTTPS
		},
	})
);

app.use(passport.authenticate('session'));

app.use(
	'/docs',
	swaggerUi.serve,
	swaggerUi.setup(undefined, {
		swaggerOptions: {
			url: '/swagger.json',
		},
	})
);

app.options('*', cors());
app.use(cors({ origin: process.env.FRONT_END_ROOT }));

app.use(Router);

AppDataSource.initialize()
	.then(() => {
		app.listen(PORT, () => {
			console.log('Server is running on port', PORT);
		});
	})
	.catch((error) => console.log(error));
