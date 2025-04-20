import { convertUrlToPdf } from '../services/pdfConverter';

export async function convertUrl(url: string) {
  return await convertUrlToPdf(url);
}
