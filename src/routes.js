module.exports = function(route){

    route()
        .get('/', 'main@test')
    route('api')
        .get('a/:id','main@home')
        .post('a','main@home')
        .delete('a','main@home')
        .get('b','main@bb')

    route('api')
        .apiResource('resources', 'main')

    route().apiResource('hahaha', 'main')
        
}