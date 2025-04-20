import { fetcher } from '@/shared/utils/fetcher';
import { PdfResponse } from '@/shared/types/api';

export async function convertUrlToPdf(url: string): Promise<PdfResponse> {
  return fetcher<PdfResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/convert`, {
    method: 'POST',
    body: JSON.stringify({ url }),
  });
}
