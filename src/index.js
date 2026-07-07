import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
import routes from './routs.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viewsPath = path.join(__dirname, 'views');
const layoutsPath = path.join(__dirname, 'views', 'layout');

app.engine('hbs', engine(
    {
        extname: 'hbs',
        layoutsDir: layoutsPath,
        defaultLayout: 'main'
    }
));
app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.use(express.static(path.join(__dirname, 'static')));
app.use(routes);

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));