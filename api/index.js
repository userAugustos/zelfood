const express = require("express");
const server = express();
const router = express.Router();
const fs = require("fs");

server.use(express.json({extended: true}));

const cors = require("cors");
server.use(cors({origin: 'http://localhost:3000'})); 

//abstraindo
const getData = () => {
    const food = fs.readFileSync('./db.json', 'utf-8');
    return JSON.parse(food);
}

router.get('/',(req, res) => {
    const data = getData();
    res.send(data);
});

router.post('/insert',(req, res) => {
    const { name, imageUrl } = req.body;

    if(name == '' || imageUrl == '') {
        res.status(400);
        return
    }else{
        const currentData = getData();
        const id = Math.floor(Math.random() * (20 - 0) + 2);
    
        currentData.food.push({id, name, imageUrl})
    
        fs.writeFileSync('./db.json', JSON.stringify(currentData), 'utf-8');
        res.send('Alimento Cadastrado com Sucesso :)');
    }
})

server.use(router);

server.listen(3004);

