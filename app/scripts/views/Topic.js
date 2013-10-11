/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var TopicView = Backbone.View.extend({
        template: JST['app/scripts/templates/Topic.ejs']
    });

    return TopicView;
});