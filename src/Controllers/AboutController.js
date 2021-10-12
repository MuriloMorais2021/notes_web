
module.exports = {
    index(req, res){
        about = {
            name: 'Murilo Morais',
            description: 'Sou natural de Juazeiro do Norte/CE, Tenho 22 Anos e estou no 4° semestre do curso de sistemas de informação. Atualmente estou trabalhando como dev FullStack com a linguagem PHP.'
        }
        res.render('Pages/about', {title: 'Sobre', about:about})
    }
}