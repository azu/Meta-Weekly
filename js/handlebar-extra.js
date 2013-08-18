/**
 * Created by azu on 2013/08/18.
 */
Handlebars.registerHelper('rssLink', function (rssURL, title) {
    if (typeof rssURL === "undefined" || rssURL.length == 0) {
        return;
    }
    return new Handlebars.SafeString('<span class="site-rss"><a href="' + rssURL + '" title="' + title + '"><img src="img/rss-256.png" /></a></span>');

});
Handlebars.registerHelper('twitterLink', function (text) {
    if (typeof text === "undefined" || text.length == 0) {
        return;
    }
    var splitURL = text.split("/");
    var userName = splitURL.pop();
    return new Handlebars.SafeString('@<a href="' + text + '">' + userName + '</a>');
});