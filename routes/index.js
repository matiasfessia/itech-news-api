'use strict'

const express = require('express');
const api = express.Router();

const notificationsCtrl = require('../controllers/notifications');
api.post('/newsletter-subscription', notificationsCtrl.newsletterSubscription);
api.post('/contact-message', notificationsCtrl.contactMessage);

module.exports = api;