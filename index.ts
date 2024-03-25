// 声明文件

// 一些早期的库可能本身没有声明文件,如express 
// 1. 可尝试使用npm i --save-dev @type/express 安装社区完成的声明文件
// 2. 手写声明文件
import axios from 'axios';
import express from 'express';


const app = express();
const router = express.Router();

app.use('/api', router)
router.get('/api', (req: any, res: any) => {
    res.json({
        code: 200
    })
})

app.listen(9001, () => {
    console.log('http://localhost:9001/api')
})



