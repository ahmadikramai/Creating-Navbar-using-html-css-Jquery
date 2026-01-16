
 $(document).ready(function () {
        $('.malik').hover(
            function () {
                $(this).find('.dropdown').stop(true, true).slideDown(200);
            },
            function () {
                $(this).find('.dropdown').stop(true, true).slideUp(200);
            }

        );

    });


    $('.login-btn').hover(
        function () {
            $('.box').css('background-color', 'green');
        },
        function () {
            $('.box').css('background-color', '#f0f0f0');
        }
    );
     

      $('.Red').hover(
        function () {
            $('.box1').css('background-color', 'red');
        },
        function () {
            $('.box1').css('background-color', '#f0f0f0');
        }
    );