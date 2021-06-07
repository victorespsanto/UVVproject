const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let user=models.User;
let key=models.Key;

app.get('/create',async (req,res)=>{
    let create=await key.create({
        ambiente: 'LAB FÍSICA',
        local: 'PRÉDIO VERDE' ,
        userId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send(create.ambiente + 'Usuário cadastrado com sucesso!');
});

app.post('/create',async (req,res)=>{
    let create=await user.create({
        nome: req.body.nome,
        senha: req.body.senha,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Usuário cadastrado com sucesso!');
});

app.post('/login',async (req,res)=>{
    console.log(req.body);
    let response=await user.findOne({
        where:{nome:req.body.nome, senha: req.body.senha}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

app.post('/verifyPass',async (req,res)=>{
    let response=await user.findOne({
        where:{id:req.body.id, senha: req.body.senhaAntiga}
    });
    if(response === null){
        res.send(JSON.stringify('Senha antiga não confere'));
    }else{
        if (req.body.nome === 'Administrador') {
            res.send(JSON.stringify('Senha do Administrador não pode ser alterada!'));
        } else {
            if(req.body. novaSenha === req.body.confNovaSenha){
                response.senha=req.body.novaSenha;
                response.save();
                res.send(JSON.stringify('Senha atualizada com sucesso!'));
            }else{
                res.send(JSON.stringify('Nova Senha e Confirmação não conferem!'));
            }
        }
    }
});


app.post('/update', async (req,res)=> {
    let update=await user.findOne ({
        where:{id:req.body.id}
    });

    update.nome = req.body.nome;
    update.save();
    
        
    });

app.post('/updateChave', async (req,res)=> {
    let update=await key.findOne ({
        where:{id:req.body.id}
    });

    update.userId = req.body.userId;
    update.save();
    
        
    });

app.get('/read', async (req,res)=>{
    let read=await key.findAll({
        raw:true,
    });
    res.send(read)
    console.log(read);
});



app.post('/delete', async (req,res)=> {
    user.destroy({
        where: {id: req.body.id}
    });
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});