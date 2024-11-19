define('login_register_forgot_password.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<section class=\"login-register-forgot-password\">\n\n	<header class=\"login-register-forgot-password-header\">\n		<h1 class=\"login-register-forgot-password-header-title\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Log in",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":3},"end":{"line":5,"column":25}}}))
    + "\n		</h1>\n	</header>\n\n	<div class=\"login-register-forgot-password-body\">\n\n		<h2 class=\"login-register-forgot-password-title\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Reset Password",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":3},"end":{"line":12,"column":33}}}))
    + "\n		</h2>\n\n		<form class=\"login-register-forgot-password-form\" novalidate>\n			<p class=\"login-register-forgot-password-description\">\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Enter your email below and we'll send you a link to reset your password.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":17,"column":93}}}))
    + "\n			</p>\n\n			<fieldset>\n\n				<div class=\"login-register-forgot-password-form-controls-group\" data-validation=\"control-group\">\n					<label class=\"login-register-forgot-password-form-label\" for=\"email\">\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Email Address <small class=\"login-register-forgot-password-form-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":105}}}))
    + "\n					</label>\n					<div class=\"login-register-forgot-password-form-controls\" data-validation=\"control\">\n						<input type=\"email\" name=\"email\" id=\"email\" class=\"login-register-forgot-password-form-input\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"your@email.com",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":113},"end":{"line":27,"column":143}}}))
    + "\">\n					</div>\n				</div>\n\n				<div data-type=\"alert-placeholder\"></div>\n\n				<div class=\"login-register-forgot-password-form-controls-group\">\n					<button type=\"submit\" class=\"login-register-forgot-password-submit\">\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Send Email",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":6},"end":{"line":35,"column":32}}}))
    + "\n					</button>\n\n				</div>\n\n			</fieldset>\n		</form>\n		<a href=\"/login-register\" class=\"login-register-forgot-password-sign-in\" data-target=\".register\" data-action=\"sign-in-now\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Log in now",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":3},"end":{"line":43,"column":29}}}))
    + "\n		</a>\n	</div>\n</section>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Suite_Commerce_Base_Theme/24.1.30/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'login_register_forgot_password'; return template;});