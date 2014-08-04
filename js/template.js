this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["Templates"] = this["MyApp"]["Templates"] || {};

this["MyApp"]["Templates"]["site_info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <tr>\n        <td><a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>"
    + escapeExpression((helper = helpers.rssLink || (depth0 && depth0.rssLink),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.rss), (depth0 && depth0.title), options) : helperMissing.call(depth0, "rssLink", (depth0 && depth0.rss), (depth0 && depth0.title), options)))
    + "</td>\n        <td><span class=\"site-updated-label-";
  if (helper = helpers.updated) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.updated); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>";
  if (helper = helpers.updated) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.updated); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.keywords), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </td>\n        <td><span class=\"site-twitter\">"
    + escapeExpression((helper = helpers.twitterLink || (depth0 && depth0.twitterLink),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.twitter), options) : helperMissing.call(depth0, "twitterLink", (depth0 && depth0.twitter), options)))
    + "</span></td>\n    </tr>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n            <span class=\"site-keyword\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span>\n            ";
  return buffer;
  }

  buffer += "<table class=\"pure-table pure-table-bordered\">\n    <thead>\n    <tr>\n        <th><span class=\"table-header-label\">Website</span></th>\n        <th><span class=\"table-header-label\">Updated</span></th>\n        <th><span class=\"table-header-label\">Keywords</span></th>\n        <th><span class=\"table-header-label\">Twitter</span></th>\n    </tr>\n    </thead>\n    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</table>";
  return buffer;
  });