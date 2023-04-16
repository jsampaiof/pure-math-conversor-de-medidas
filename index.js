import Express from "express";
import { StatusCodes } from 'http-status-codes';
import * as type from './public/Scripts/CalculationType.js'

const app = Express();
const PORT = process.env.PORT || 1220;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(Express.static('public/'))
app.use(Express.json())

app.listen(PORT, () => {
    console.log(`server running in port: http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    const getType = type.getType();
    res.status(StatusCodes.OK).render('pages/home.ejs', {title: 'PureMath - Conversor de Medidas', getType})
})
