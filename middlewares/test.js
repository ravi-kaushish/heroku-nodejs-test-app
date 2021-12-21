exports.checkAuth = async (req, res, next) => {
  if(req.headers.authorization){
    console.log
    if(req.headers.authorization === `Basic ${Buffer.from(`${process.env.ADMIN_KEY}:${process.env.ADMIN_SECRET}`).toString('base64')}`){
      next();
    }else{
      res.status(401).send({
        message: "Unauthorized"
      });
    }
  }else{
    res.status(401).send({
      message: "Unauthorized"
    });
  }
};