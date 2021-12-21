const redis = require("redis");

const client = redis.createClient({
    url: process.env.SSL_OPTION ? process.env.REDIS_URL_SSL : process.env.REDIS_URL,
    socket: {
        tls: process.env.SSL_OPTION ? true : false,
        rejectUnauthorized: false
    }
});

exports.getTest = async (req, res) => {
  try{
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    let result = await client.get(req.query.key);
    res.send(result);
    await client.disconnect();
  }catch(e){
    res.send(e);
  }
};

exports.postTest = async (req, res) => {
  try{
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    let result = await client.set(req.body.key, typeof(req.body.value) === "object" ? await JSON.stringify(req.body.value) : req.body.value);
    res.send(result);
    await client.disconnect();
  }catch(e){
    res.send(e);
  }
};

exports.putTest = async (req, res) => {
  try{
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    let result = await client.get(req.body.key) || '[]';
    result = await JSON.parse(result);
    req.body.value.forEach(element => {
      result.push(element);
    });
    let update = await client.set(req.body.key, JSON.stringify(result));
    res.send(update);
    await client.disconnect();
  }catch(e){
    res.send(e);
  }
};