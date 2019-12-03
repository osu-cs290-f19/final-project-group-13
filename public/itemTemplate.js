(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\"items\">\n    <div class=\"item\" data-bookmark=\""
    + alias4(((helper = (helper = helpers.BOOKMARK || (depth0 != null ? depth0.BOOKMARK : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"BOOKMARK","hash":{},"data":data,"loc":{"start":{"line":2,"column":37},"end":{"line":2,"column":49}}}) : helper)))
    + "\" data-categories=\""
    + alias4(((helper = (helper = helpers.CATEGORIES || (depth0 != null ? depth0.CATEGORIES : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CATEGORIES","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":82}}}) : helper)))
    + "\" data-ingredients=\""
    + alias4(((helper = (helper = helpers.INGREDIENTS || (depth0 != null ? depth0.INGREDIENTS : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"INGREDIENTS","hash":{},"data":data,"loc":{"start":{"line":2,"column":102},"end":{"line":2,"column":117}}}) : helper)))
    + "\">\n        <div class=\"item-contents\">\n            <div class=\"item-image-container\">\n                <a href=\"#\"><img src=\""
    + alias4(((helper = (helper = helpers.IMG_URL || (depth0 != null ? depth0.IMG_URL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"IMG_URL","hash":{},"data":data,"loc":{"start":{"line":5,"column":38},"end":{"line":5,"column":49}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.CAPTION || (depth0 != null ? depth0.CAPTION : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CAPTION","hash":{},"data":data,"loc":{"start":{"line":5,"column":56},"end":{"line":5,"column":67}}}) : helper)))
    + "\"></a>\n            </div>\n            <div class=\"item-info-container\">\n                <span class=\"item-title\">"
    + alias4(((helper = (helper = helpers.CAPTION || (depth0 != null ? depth0.CAPTION : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CAPTION","hash":{},"data":data,"loc":{"start":{"line":8,"column":41},"end":{"line":8,"column":52}}}) : helper)))
    + "</span>\n            </div>\n            <div class=\"item-button-container\">\n                <button type=\"button\" class=\"far fa-star\"></button>\n                <button type=\"button\" class=\"fas fa-trash\"></button>\n            </div>\n        </div>\n    </div>\n</section>";
},"useData":true});
})();