module.exports = function(route){

    route('api')
        .get('a/:id','main@home')
        .post('a','main@home')
        .delete('a','main@home')
        .get('b','main@bb')
        
}