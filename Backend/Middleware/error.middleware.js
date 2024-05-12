class Error {
   async handle(err, req, res, next) {
    let status = err.status || 500;
    let message = err.message || 'Internal server error';
    res.status(status).send(message);
  }
}

module.exports = new Error();