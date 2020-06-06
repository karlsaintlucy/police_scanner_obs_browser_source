var scanMap = function() {
    $("#scanmap_iframe").src = $("#scanmap_iframe").src;
}

var clock = function() {
    var now = new Date();
    var nowString = now.toLocaleString();
    $("#clock").html(nowString);
}

var toggleBroadcastify = function() {
    if ($("#broadcastify_iframe").css("display") == "none") {
        $("#broadcastify_iframe").show();
        $("#toggle_broadcastify").html("HIDE PLAYER");
    } else {
        $("#broadcastify_iframe").hide();
        $("#toggle_broadcastify").html("SHOW PLAYER");
    }
}

$(document).ready(function () {
    var refreshScanMap = setInterval(scanMap, 10000);
    var refreshClock = setInterval(clock, 1000);
});