import {io} from "socket.io-client"


const socketInit = ({user_id , token})=> {
   return io("http://localhost:5000/" , {
        extraHeaders:{
            user_id,
            token,
        },
       // autoConnect: false ,// 
    })
}

export default socketInit;