import { Request, Response } from 'express'
import { MongooseDocument } from 'mongoose'
import { Book } from '../models'

export class BookService {
  public hello(req: Request, res: Response) {
    return res.status(200).send("Hello from Book Service")
  }

  public async getAllBooks(req: Request, res: Response) {
    try {
      const book = await Book.find()
      res.json(book)
    }
    catch (error) {
      return res.status(200).send(error)
    }
  }

  public async addNewBook(req: Request, res: Response) {
    const { body } = req
    const newBook = new Book(body)
    try {
      const book = await newBook.save()
      res.json(book)
    }
    catch (error) {
      return res.status(200).send(error)
    }
  }
}
