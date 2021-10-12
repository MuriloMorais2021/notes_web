
module.exports = {
    async index(req, res){
        
        author = "Murilo Morais";

 

        res.render('Pages/home', {author1:author});
    }
}