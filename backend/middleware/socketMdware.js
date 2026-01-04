const socketMdware = (socket , next)=>{
    if(socket[0]!== "message"){
        next(new Error("socket middleWare Error"));
    }else {
        next();
    }
}

module.exports = socketMdware;