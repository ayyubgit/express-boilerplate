class Main {
    constructor(req,res,next){
        this.req = req
        this.res = res
        this.next = next
    }

    home(){
        console.log(this.req.params.id)
        this.res.json({a:5})
    }

    bb() {
        this.res.json({a:5,b:7})
    }

}

module.exports = Main
  