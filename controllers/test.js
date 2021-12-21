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
    let result = await client.get('key');
    res.send(result);
    await client.disconnect();
  }catch(e){
    res.send(e);
  }
};

exports.postTest = async (req, res) => {
  try{
    value = req.body;
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    let result = await client.set('key', JSON.stringify(value));
    res.send(result);
    await client.disconnect();
  }catch(e){
    res.send(e);
  }
};