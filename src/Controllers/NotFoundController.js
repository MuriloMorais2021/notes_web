module.exports = {
    index(req, res) {

        const message = 'ERRO 404 - Page Not Found'
        res.render('Pages/404', { message: message })
    }
}