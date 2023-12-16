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

    index() {
        this.res.end('index');
    }
    show() {
        this.res.end('show');
        
    }
    store() {
        this.res.end('store');
        
    }
    update() {
        this.res.json({'key' : 'fafa'});
        
    }
    destroy() {
        this.res.end('destroy');
        
    }

    test() {
        this.res.json({'key' : 'fafa'});
    }
}

module.exports = Main
  