module.exports = function(appRoutes, app){
    appRoutes.forEach(routeGroup=>{
        const {prefix,routes} = routeGroup
    
        const routePrefix = prefix ? `/${prefix}/` : ''
    
        Object.keys(routeGroup.routes).forEach(key => {
            const route = routes[key]
    
            const handler = route[2].split('@')
            
            const type = route[0]
            const controller = handler[0]
            const method = handler[1]
    
            const controllerClass = require(`./controllers/${controller}`)
            
            let finalRoute = routePrefix+route[1]
            
            if(!finalRoute.startsWith('/')) finalRoute = '/'+finalRoute
            console.log(type,finalRoute)
    
            app[type](finalRoute,(req,res,next)=>{
                const newClass = new controllerClass(req,res,next)
                newClass[method]() // b
            })
    
        });
    
    })
}