'use strict';

/**
 * collection controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::collection.collection", {
    async find(ctx) {
        const user = ctx.state.user;
        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            user: user.id,
        };
        return super.find(ctx);
    },
});