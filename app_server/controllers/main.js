module.exports.index=function(req,res){
    res.render('index', { title: 'Home' });
   };
   module.exports.signin=function(req,res){
    res.render('signin', { title: 'Sign In' });
   };
   module.exports.review=function(req,res){
    res.render('review', { title: 'Review' });
   };
