class SiteControllers
{
    home(req,res)
    {
        res.render('home');
    }
}

module.exports = new SiteControllers;