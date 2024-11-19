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

   

                // Find the facet object from the configuration array that matches the cleaned facetId
                const facet = configuration.facets.find(function (f) {
                    // Clean both the facet.id and the facetId before comparing
                    const cleanedFacetIdFromConfig = f.id.trim();  // Remove whitespace/tabs from facet.id

                    // Log the cleaned facet.id for debugging
                 

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
