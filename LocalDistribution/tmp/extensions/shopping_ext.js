var extensions = {};

extensions['jj.PLPFacetView.1.0.2'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/jj/PLPFacetView/1.0.2/' + asset;
}

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


// Model.js
// -----------------------
// @module Case
define("jj.PLPFacetView.PLPFacetView.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
});
});


define('jj.PLPFacetView.PLPFacetView', [
    'jj_plpfacetview_plpfacetview.tpl',
    'Facets.FacetedNavigation.View',
    'Facets.FacetedNavigationItem.View',
    'jj_plp_facetdisplay.tpl'
], function (customFacetsBrowseTpl, FacetsBrowseView, FacetsNavigationView, FacetNavigationTpl) {
    'use strict';

    return {
        mountToApp: function (application) {
            var originalGetContext = FacetsNavigationView.prototype.getContext;
            let configuration = application.configuration;

            // Define the getName function
            function getName(facetId) {
                // Trim any leading or trailing whitespace characters (including tabs) from facetId
                const cleanedFacetId = facetId.trim(); // This removes any leading/trailing whitespace or tabs

                // Log the cleaned facetId to ensure it's properly trimmed

                // Find the facet object from the configuration array that matches the cleaned facetId
                const facet = configuration.facets.find(function (f) {
                    // Clean both the facet.id and the facetId before comparing
                    const cleanedFacetIdFromConfig = f.id.trim();  // Remove whitespace/tabs from facet.id

     

                    return cleanedFacetIdFromConfig === cleanedFacetId;  // Compare both cleaned IDs
                });

                // Return the name if the facet is found, otherwise return a fallback value
                return facet ? facet.name : 'Unknown Facet';
            }

            // Extend the FacetsNavigationView
            _.extend(FacetsNavigationView.prototype, {
                template: customFacetsBrowseTpl,

                getContext: function () {
                    // Call the original getContext method
                    var originalContext = originalGetContext.apply(this, arguments);

                    // Log facet config id for debugging

                    // Log the name of the facet based on the facet_config.id
                    const facetName = getName(this.facet_config.id);
                  


                    // Add custom values to the context
                    originalContext.facetDisplayName = facetName;
                    originalContext.showFacet = true;
                    originalContext.showRemoveLink =false;
                    return originalContext;
                }
            });

            // Set custom templates
            FacetsBrowseView.prototype.template = customFacetsBrowseTpl;
            FacetsNavigationView.prototype.template = FacetNavigationTpl;
        }
    };
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["jj.PLPFacetView.PLPFacetView.View","jj.PLPFacetView.PLPFacetView.Model"];
try{
	extensions['jj.PLPFacetView.1.0.2']();
	SC.addExtensionModule('jj.PLPFacetView.PLPFacetView');
}
catch(error)
{
	console.error(error);
}

