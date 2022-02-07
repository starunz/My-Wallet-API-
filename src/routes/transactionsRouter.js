import { Router } from "express";

import { addEntry, addExit, transactions} from "../controllers/transactionsController.js";

import { validateTransaction } from "../middlewares/validateTransactions.js";
import { validateToken } from '../middlewares/validateToken.js'

const transactionsRouter = Router();

transactionsRouter.use(validateToken);

transactionsRouter.get('/transactions', transactions);
transactionsRouter.post('/add-entry',validateTransaction, addEntry);
transactionsRouter.post('/add-exit',validateTransaction, addExit);

export default transactionsRouter;