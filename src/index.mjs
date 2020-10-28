import Koa from 'koa';
import route from 'koa-route';
import { TangShi } from './getTang.mjs';

const app = new Koa();
const tangShi = new TangShi();
tangShi.loadAllPoet().then(() => {
    app.listen(3000);
});

const main = ctx => {
    ctx.response.type = 'json';
    ctx.response.body = {hello: 'world'};
}


app.use(route.get('/getTang', tangShi.getTang));
app.use(route.get('/', main));

