const Koa = require('koa');
const app = new Koa();


const nunjucks = require('nunjucks');


nunjucks.configure('views', { autoescape: true });


const data = {

    items: [
        {
            name: "vince",
            score: 3000
        },
        {
            name: "ahmed",
            score: 3001
        }
    ]
};

app.use(async ctx => {
  ctx.body = nunjucks.render('index.html', data);
});

app.listen(3000);