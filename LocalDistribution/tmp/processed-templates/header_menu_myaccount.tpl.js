define('header_menu_myaccount.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<ul class=\"header-menu-myaccount\">\n	<li>\n		<a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back\">\n			<i class=\"header-menu-myaccount-pop-icon \"></i>\n			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":16,"column":23}}}))
    + "\n		</a>\n	</li>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"entries") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":50,"column":13}}})) != null ? stack1 : "")
    + "\n</ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <li class=\"header-menu-myaccount-item-level2\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"permission") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":50},"end":{"line":21,"column":108}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"permissionOperator") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":109},"end":{"line":21,"column":192}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"url") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":32,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":8},"end":{"line":48,"column":15}}})) != null ? stack1 : "")
    + "    </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-permissions=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"permission") || (depth0 != null ? compilerNameLookup(depth0,"permission") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"permission","hash":{},"data":data,"loc":{"start":{"line":21,"column":86},"end":{"line":21,"column":100}}}) : helper)))
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-permissions-operator=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"permissionOperator") || (depth0 != null ? compilerNameLookup(depth0,"permissionOperator") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"permissionOperator","hash":{},"data":data,"loc":{"start":{"line":21,"column":162},"end":{"line":21,"column":184}}}) : helper)))
    + "\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <a  class=\"header-menu-myaccount-anchor-level2\" href=\"#\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":65},"end":{"line":23,"column":118}}})) != null ? stack1 : "")
    + " data-touchpoint=\"customercenter\" data-hashtag=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":23,"column":167},"end":{"line":23,"column":174}}}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":23,"column":182},"end":{"line":23,"column":190}}}) : helper)))
    + "\">\n            "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"name") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":24,"column":30}}}))
    + "\n            "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":25,"column":94}}})) != null ? stack1 : "")
    + "\n        </a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "data-action=\"push-menu\"";
},"10":function(container,depth0,helpers,partials,data) {
    return "<i class=\"header-menu-myaccount-menu-push-icon\"></i>";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "        <span  class=\"header-menu-myaccount-span-level2\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":57},"end":{"line":28,"column":110}}})) != null ? stack1 : "")
    + " name=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":28,"column":117},"end":{"line":28,"column":125}}}) : helper)))
    + "\">\n            "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"name") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":30}}}))
    + "\n            "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"children") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":94}}})) != null ? stack1 : "")
    + "\n        </span>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <ul class=\"header-menu-myaccount-level3\">\n            <li>\n                <a href=\"#\" class=\"header-menu-myaccount-back\" data-action=\"pop-menu\" name=\"back-level3\">\n                    <i class=\"header-menu-myaccount-pop-icon \"></i>\n                    "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Back",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":39,"column":20},"end":{"line":39,"column":40}}}))
    + "\n                </a>\n            </li>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":12},"end":{"line":46,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"permission") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":16},"end":{"line":43,"column":74}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"permissionOperator") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":75},"end":{"line":43,"column":158}}})) != null ? stack1 : "")
    + ">\n                <a class=\"header-menu-myaccount-anchor-level3\" href=\"#\" data-touchpoint=\"customercenter\" data-hashtag=\"#"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":44,"column":120},"end":{"line":44,"column":127}}}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":44,"column":135},"end":{"line":44,"column":143}}}) : helper)))
    + "\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"name") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":44,"column":145},"end":{"line":44,"column":163}}}))
    + "</a>\n            </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"header-menu-myaccount-signout\">\n    <a class=\"header-menu-myaccount-signout-link\" href=\"#\" data-touchpoint=\"logout\" name=\"signout\">\n        <i class=\"header-menu-myaccount-signout-icon\"></i>\n        "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Sign Out",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":32}}}))
    + "\n    </a>\n</div>\n<a class=\"header-menu-myaccount-anchor\" href=\"#\" data-action=\"push-menu\" name=\"myaccount\">\n    "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"My Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":30}}}))
    + "\n    <i class=\"header-menu-myaccount-menu-push-icon\"></i>\n</a>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMyAccountMenu") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":53,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_menu_myaccount'; return template;});