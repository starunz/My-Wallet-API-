import db from "../db.js";
import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";

export async function transactions(req, res) {
  const user = res.locals.user;

  try {
    const transactions = await db
    .collection('transactions')
    .find({ userId: user._id })
    .toArray();

    res.send(transactions);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function addEntry(req, res) {
    const { value, description } = req.body;
    const user = res.locals.user;
  
    try {
      await db.
      collection('transactions')
      .insertOne({
        userId: user._id,
        value: Number(value),
        description,
        type: 'entry',
        date: `${dayjs().format("DD/MM")}`,
      });
  
      res.sendStatus(201);
    } catch (error) {
      res.status(500).send(error);
    }
}

export async function addExit(req, res) {
    const { value, description } = req.body;
    const user = res.locals.user;
  
    try {
      await db
      .collection('transactions')
      .insertOne({
        userId: user._id,
        value: Number(value),
        description,
        type: 'exit',
        date: `${dayjs().format("DD/MM")}`,
      });
  
      res.sendStatus(201);
    } catch (error) {
      res.status(500).send(error);
    }
}