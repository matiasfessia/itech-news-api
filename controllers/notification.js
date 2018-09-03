const errorsHandler = require('../commons/errors-handler');

const sleep = milliseconds => {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

/** */
const newsletterSubscription = (req, res)  => {
  sleep(1500);

  /* Validations */
  req.checkBody('email', errorsHandler.getError('BAS001')).notEmpty();
  req.checkBody('email', errorsHandler.getError('BAS002')).isLength({ max: 50 });
  req.checkBody('email', errorsHandler.getError('BAS003')).isEmail();
  
  const errors = req.validationErrors();
  if (errors) {
    const response = { errors: [] }
    errors.forEach(function(err) {
      response.errors.push({
        param: err.param,
        message: err.msg
      });
    });
    res.statusCode = 400;
    return res.json(response);
  }
  
  res.status(200).send({ message: `newsletter subscription successful for email ${req.body.email}` });
};


/** */
const contactMessage = (req, res)  => {
  sleep(1500);

  /* Validations */
  req.checkBody('name', errorsHandler.getError('BAS001')).notEmpty();
  req.checkBody('name', errorsHandler.getError('BAS001')).isLength({ max: 50 });
  req.checkBody('email', errorsHandler.getError('BAS001')).notEmpty();
  req.checkBody('email', errorsHandler.getError('BAS002')).isLength({ max: 50 });
  req.checkBody('email', errorsHandler.getError('BAS003')).isEmail();
  req.checkBody('message', errorsHandler.getError('BAS001')).notEmpty();
  req.checkBody('message', errorsHandler.getError('BAS002')).isLength({ max: 500 });

  const errors = req.validationErrors();
  if (errors) {
    const response = { errors: [] }
    errors.forEach(function(err) {
      response.errors.push({
        param: err.param,
        message: err.msg
      });
    });
    res.statusCode = 400;
    return res.json(response);
  }
  
  res.status(200).send({ message: `contact message sended` });
}

module.exports = {
  newsletterSubscription,
  contactMessage
};