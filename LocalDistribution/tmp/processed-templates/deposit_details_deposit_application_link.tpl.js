define('deposit_details_deposit_application_link.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"/transactionhistory/depositapplication/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"depositApplicationId") || (depth0 != null ? compilerNameLookup(depth0,"depositApplicationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"depositApplicationId","hash":{},"data":data,"loc":{"start":{"line":1,"column":48},"end":{"line":1,"column":72}}}) : helper)))
    + "\" data-action=\"go-to-deposit-application\" class=\"deposit-details-deposit-application-link-deposit-application-date\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"depositApplicationDate") || (depth0 != null ? compilerNameLookup(depth0,"depositApplicationDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"depositApplicationDate","hash":{},"data":data,"loc":{"start":{"line":1,"column":188},"end":{"line":1,"column":214}}}) : helper)))
    + "</a>\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'deposit_details_deposit_application_link'; return template;});