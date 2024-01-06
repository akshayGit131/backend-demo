class apiErrors extends Error {
    constructor(
        statusCode,
        message = "somethng went wrong",
        errors = [],
        statck = ""
    ){
       super(message),
       this.statusCode = statusCode,
       this.errors = errors,
       this.message = message
       this.data=null,
       this.sucess=false

       if(statck){
        this.statck=statck
       }else{
        Error.captureStackTrace(this,this.constructor)
       }
    }
}

export {apiErrors}