// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const item1 = { category: 'catcat', quote: 'Once', author: 'Sophie' };
const item2 = { category: 'catcat', quote: 'Twice', author: 'Sophie' };
const item3 = { category: 'catcat', quote: 'Thrice', author: 'Sophie' };

const data = [item1, item2, item3];

const handlers = rest.get('https://api.api-ninjas.com/v1/quotes', (req, res, ctx) => res(
  ctx.json(data),
));

export default handlers;
