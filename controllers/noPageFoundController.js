exports.showPageNotFound = (req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {
        pageTitle: '4004',
        path: '/404'
    });
};