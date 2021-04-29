class Router {

    constructor(appRoutes){
        this.appRoutes = appRoutes
        this.route = {
            routes: []
        }
    }

    get(route, handler){
        this.route.routes.push(['get',route,handler])
        this.appRoutes.push(this.route)
        return this
    }

    post(route, handler){
        this.route.routes.push(['post',route,handler])
        this.appRoutes.push(this.route)
        return this
    }

    delete(route, handler){
        this.route.routes.push(['delete',route,handler])
        this.appRoutes.push(this.route)
        return this
    }

    prefix(prefix) {
        this.route.prefix = prefix
        this.appRoutes.push(this.route)
        return this
    }
}

module.exports = Router