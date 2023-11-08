import { LexicalCommand, createCommand } from "lexical";
import { Book } from "../../models/book";

export const EXPORT_PDF_COMMAND: LexicalCommand<string> = createCommand()
export const SAVE_DOCUMENT_COMMAND: LexicalCommand<Book> = createCommand()
