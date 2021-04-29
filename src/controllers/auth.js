class Auth {
    constructor(req,res,next){
        this.req = req
        this.res = res
        this.next = next
    }

    register(){
        this.res.json({success:true})
    }

}

module.exports = Auth
  