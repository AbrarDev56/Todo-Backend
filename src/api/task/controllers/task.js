'use strict';

/**
 * task controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::task.task", {
    async find(ctx) {
        const user = ctx.state.user;
        ctx.query.filters = {
            ...(ctx.query.filters || {}),
            user: user.id,
        };
        return super.find(ctx);
    },
});