/*global define */
define([
	'routes/Main.js'
	], function (MainRouter) {
    'use strict';

    var mRouter = new MainRouter();
    mRouter.startSys();
    Backbone.history.start();

    return '\'Allo \'Allo!';
});