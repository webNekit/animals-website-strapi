'use strict';

/**
 * status-pet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::status-pet.status-pet');
