$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        $.ajax({
            url: $(this).attr('action'), 
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                //console.log(response);
                //console.log(JSON.parse(response));
                console.log(JSON.parse(response).success);
                if (JSON.parse(response).success === false) {
                    $('#message').remove();
                    $('form').before('<p id="message" style="color: red;">' + JSON.parse(response).message + '</p>');
                } else {
                    $('form').replaceWith('<p style="color: green;">' + response + '</p>');
                }
            },
            error: function(xhr, status, error) {
                $('#message').remove();
                $('form').before('<p id="message" style="color: red;">' + error + '</p>');
            }
        });
    });
});

$('#username').on('input', function() {
    var input = $(this);
    var username = input.val();
    if (username.length > 0) {
        input.css('border-color', '');
    } else {
        input.css('border-color', 'red');
    }
    if (username.length > 255) {
        input.css('border-color', 'red');
    }
});

$('#password').on('input', function() {
    var input = $(this);
    var password = input.val();
    if (password.length > 0) {
        input.css('border-color', '');
    } else {
        input.css('border-color', 'red');
    }
    if (password.length > 255) {
        input.css('border-color', 'red');
    }
});