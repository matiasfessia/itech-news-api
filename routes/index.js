'use strict'

const express = require('express');
const api = express.Router();

const postCtrl = require('../controllers/post');
api.get('/posts', postCtrl.getPosts);
api.get('/posts/:slug', postCtrl.getPost);

const notificationCtrl = require('../controllers/notification');
api.post('/newsletter-subscription', notificationCtrl.newsletterSubscription);
api.post('/contact-message', notificationCtrl.contactMessage);

const contentCtrl = require('../controllers/content');
api.get('/content/:code', contentCtrl.getContent);

module.exports = api;