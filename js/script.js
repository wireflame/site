$(document).ready(function () {
    $('#addElements').doModal('#carousel');
});

window.addEventListener('load', function (e) {
    setTimeout(function () {
        window.scrollTo(0, 1);
    },
    1)
},
false);