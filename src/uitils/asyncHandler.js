

// const asynchandler = (fn) => async (req,res,next) =>{
//    try{
//       await fn(req,res,next)

//    }catch(err){
//     res.status(err.code || 500).json({
//       sucess:false,
//       message:err.message
//     })
//    }
// }


// promise based //

const asynchandler = (requestHandler) =>{
  (req,res,next)=>{
      Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
  }
}

export default asynchandler