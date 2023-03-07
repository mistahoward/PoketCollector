import express, { Application } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import session from 'express-session';
const pgSession = require('connect-pg-simple')(session);

import cors from 'cors';

import Router from './routes';
import AppDataSource from './config/database';
const PORT = process.env.PORT || 8000;

import passport from 'passport';
import { Pool } from 'pg';

const app: Application = express();

const pool = new Pool({
  host: process.env.POSTGRESURL ?? '',
  port: 5432,
  user: process.env.POSTGRESUSERNAME ?? '',
  password: process.env.POSTGRESPASSWORD ?? '',
  database: process.env.POSTGRESUSERNAME ?? '',
});

app.use(
	session({
		store: new pgSession({ 
		pool,
		tableName: 'session' 
	}),
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


app.use(express.json());
app.use(morgan('tiny'));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('public'));

app.use(
	'/docs',
	swaggerUi.serve,
	swaggerUi.setup(undefined, {
		swaggerOptions: {
			url: '/swagger.json',
		},
	})
);

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
