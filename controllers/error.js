const path = require('path');

exports.get404 = (req, res, next) => {
  res.status(404).render('404', { 
    pageTitle: 'Page Not Found', 
    path: path.join(path.dirname(require.main.filename), "views", '404')
   });
};
