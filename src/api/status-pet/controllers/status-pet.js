'use strict';

/**
 * status-pet controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::status-pet.status-pet');
