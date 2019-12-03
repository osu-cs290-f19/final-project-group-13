(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"item\" data-bookmark=\""
    + alias4(((helper = (helper = helpers.BOOKMARK || (depth0 != null ? depth0.BOOKMARK : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"BOOKMARK","hash":{},"data":data,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":45}}}) : helper)))
    + "\" data-categories=\""
    + alias4(((helper = (helper = helpers.CATEGORIES || (depth0 != null ? depth0.CATEGORIES : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CATEGORIES","hash":{},"data":data,"loc":{"start":{"line":1,"column":64},"end":{"line":1,"column":78}}}) : helper)))
    + "\" data-ingredients=\""
    + alias4(((helper = (helper = helpers.INGREDIENTS || (depth0 != null ? depth0.INGREDIENTS : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"INGREDIENTS","hash":{},"data":data,"loc":{"start":{"line":1,"column":98},"end":{"line":1,"column":113}}}) : helper)))
    + "\">\n    <div class=\"item-contents\">\n        <div class=\"item-image-container\">\n            <a href=\"#\"><img src=\""
    + alias4(((helper = (helper = helpers.IMG_URL || (depth0 != null ? depth0.IMG_URL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"IMG_URL","hash":{},"data":data,"loc":{"start":{"line":4,"column":34},"end":{"line":4,"column":45}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.CAPTION || (depth0 != null ? depth0.CAPTION : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CAPTION","hash":{},"data":data,"loc":{"start":{"line":4,"column":52},"end":{"line":4,"column":63}}}) : helper)))
    + "\"></a>\n        </div>\n        <div class=\"item-info-container\">\n            <span class=\"item-title\">"
    + alias4(((helper = (helper = helpers.CAPTION || (depth0 != null ? depth0.CAPTION : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CAPTION","hash":{},"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":48}}}) : helper)))
    + "</span>\n        </div>\n        <div class=\"item-button-container\">\n            <button type=\"button\" class=\"far fa-star\"></button>\n            <button type=\"button\" class=\"fas fa-trash\"></button>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();