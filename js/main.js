var context = MyJSONData["data.json"];
var updatedType = {
    "daily": "daily",
    "weekly": "weekly",
    "fortnightly": "fortnightly",
    "monthly": "monthly",
    "other": "other"
};
/**
 *
 * @param siteInfo
 * @param {updatedType} type
 */
function isUpdatedType(siteInfo, type) {
    return siteInfo["updated"] === type;
}
function filterByUpdateType(type) {
    return context.filter(function (siteInfo) {
        return isUpdatedType(siteInfo, type);
    });
}

function showResetButton() {
    $(".nav-updated-helper").show()
}
function hideResetButton() {
    $(".nav-updated-helper").hide()
}
$(".js-filer-updated a").on("click", function (evt) {
    evt.preventDefault();
    var updatedType = evt.target.href.split("#").pop();
    var newContext = filterByUpdateType(updatedType);
    render(newContext);
    showResetButton();
});

$("#js-updated-reset-button").on("click", function (evt) {
    render(context);
    hideResetButton();
});

$(function () {
    render(context);
});

function render(sites) {
    var html = MyApp.Templates.site_info(sites);
    $("#main").html(html);
}
