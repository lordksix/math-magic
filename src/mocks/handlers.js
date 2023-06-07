import { rest } from 'msw';

const url = 'https://api.api-ninjas.com/v1/quotes?category=intelligence&limit=1';
const item1 = { category: 'catcat', quote: 'Once', author: 'Sophie' };
const item2 = { category: 'catcat', quote: 'Twice', author: 'Sophie' };
const item3 = { category: 'catcat', quote: 'Thrice', author: 'Sophie' };

const data = [item1, item2, item3];

const handlers = [
  rest.get(url, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(data),
  )),
];

export default handlers;
