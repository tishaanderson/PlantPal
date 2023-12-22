// const withAuth = (req, res, next) => {
//     if (!req.session.logged_in) {
//         res.redirect('/login');
//     } else {
//         next();
//     }
// };

// module.exports = withAuth;

const withAuth = (req, res, next) => {
    if (req.session.logged_in) {
        res.locals.logged_in = true;
    } else {
        res.locals.logged_in = false;
    }
    next();
};

module.exports = withAuth;