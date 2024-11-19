// @module jj.PLPFacetView.PLPFacetView
define('jj.PLPFacetView.PLPFacetView.View', [
    'jj_plpfacetview_plpfacetview.tpl',
    'SCView',
    'Backbone'
], function(
    jj_plpfacetview_plpfacetview_tpl,
    SCViewComponent,
    Backbone
) {
    'use strict';

    // @class jj.PLPFacetView.PLPFacetView.View @extends Backbone.View
    return {
        // The view itself, with child views added via Extensibility API
        template: jj_plpfacetview_plpfacetview_tpl,

        initialize: function(options) {
            // Initialize any properties or data for the parent view
            this.options = options || {};
        },

        events: {},

        bindings: {},

        childViews: {
            // You can now add child views dynamically using the Extensibility API
            'ChildViewID': function() {
                return new SCViewComponent({
                    // Initialize the child view here
                    template: 'child_template', // Replace with the actual child template
                    getContext: function() {
                        return {
                            message: "This is a child view"
                        };
                    }
                });
            }
        },

        //@method getContext @return jj.PLPFacetView.PLPFacetView.View.Context
        getContext: function getContext() {
            return {
                // Return the context for the PLPFacetView
            };
        }
    };
});
