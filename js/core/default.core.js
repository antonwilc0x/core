var dynamicContent = getParameterByName('p');

$(document).ready(function () {
    switch (dynamicContent) {
        case 'about':
            $('#about').show();
            break;
        default:
            $('#home').show();
    }
});