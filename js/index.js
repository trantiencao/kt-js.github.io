$(document).ready(function() {
    $('.showtext').hide();
    $('.btn').click(function(e) {
        let search = $('.input').val();
        console.log(search);
        e.preventDefault();
        if (search == "Bác Hồ") {
            $('.showtext').hide();
            $('.bacho').addClass('radius');
        } else {
            $('.showtext').show();
            $('.bacho').removeClass('radius');
        }
    });
});