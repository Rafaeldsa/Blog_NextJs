import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(
    'https://spacetraveling2221.prismic.io/api/v2',
    {
      req,
      accessToken:
        'MC5ZWFg2TUJRQUFDa0FTcGtT.d1Y0T0zvv73vv73vv73vv70eWWhr77-9Zi1P77-977-9REzvv73vv71dKCDvv73vv73vv73vv73vv73vv70',
    }
  );

  return prismic;
}
