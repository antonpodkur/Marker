// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {books} from '../models';

export function DeleteBookById(arg1:number):Promise<void>;

export function ExportBook(arg1:number):Promise<void>;

export function GetAllBooks():Promise<Array<books.Book>>;

export function GetBookById(arg1:number):Promise<books.Book>;

export function SaveBook(arg1:books.Book):Promise<void>;

export function SavePdf(arg1:string):Promise<void>;

export function UpdateBook(arg1:books.Book):Promise<void>;
