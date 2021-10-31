import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

import CONFIG from '../../config';

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(
    'https://spacetraveling2221.prismic.io/api/v2',
    {
      req,
      accessToken: CONFIG.prismicAccessToken,
    }
  );

  return prismic;
}
