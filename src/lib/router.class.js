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

    put(route, handler){
        this.route.routes.push(['put',route,handler])
        this.appRoutes.push(this.route)
        return this
    }

    delete(route, handler){
        this.route.routes.push(['delete',route,handler])
        this.appRoutes.push(this.route)
        return this
    }

    apiResource(route, handler){
        const apiRoutes = route.split('/');
        const lastRoute = apiRoutes[apiRoutes.length - 1];
        const model = lastRoute.substr(0, lastRoute.length - 2);

        this.get(route, `${handler}@index`);
        this.post(route, `${handler}@store`);
        this.get(`${route}/:${model}`, `${handler}@show`);
        this.put(`${route}/:${model}`, `${handler}@update`);
        this.delete(`${route}/:${model}`, `${handler}@destroy`);
    }


    prefix(prefix) {
        this.route.prefix = prefix
        this.appRoutes.push(this.route)
        return this
    }

}

module.exports = Router