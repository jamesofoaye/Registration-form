window.onload = function () {
    $('#moreJobInfo').hide();
    $('#employee').on('click', function () {
        $('#moreJobInfo').show(400);
    });

    $('#selfEmployed').on('click', function () {
        $('#moreJobInfo').show(400);
    });

    $('#unemployed').on('click', function () {
        $('#moreJobInfo').hide(400);
    });
}
