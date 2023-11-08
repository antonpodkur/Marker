import { SavePdf } from "../../../wailsjs/go/books/BookController";

// TODO: Remove it later
export const htmlStringToPdf = async (htmlString: string) => {
  await SavePdf(htmlString)
};
