import { Action } from '@ngrx/store';

export enum BookActionTypes {
  BookAction = '[Book] Action'
}

export class Book implements Action {
  readonly type = BookActionTypes.BookAction;
}

export type BookActions = Book;
