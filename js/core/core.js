// Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function () {
    var coreparent = ".sub_parent";
    $(".core_sub").on("click", function (e) {

        e.preventDefault();
        var target = $(this).attr("href");
        $(coreparent).not(target).hide();
        if (history.pushState) {
            history.pushState(target, null, target);
            $(target).show();
        }
        else {
            location.hash = target;
            $(target).show();
        }
        $(coreparent).not(target).hide();

    });
});