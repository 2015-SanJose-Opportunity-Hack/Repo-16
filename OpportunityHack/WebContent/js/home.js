$(document).ready(function() {

    $("#login").click(function() {
        var email = $("#email").val();
        var password = $("#password").val();
        var auth = false;
        $.getJSON("json/users.json", function(data) {
            $.each(data, function(key, val) {
                if (val.user === email && val.pass === password) {
                    auth = true;
                    if (auth) {
                        // alert("User logged in succesfully");
                        url = "project/profile1.html";
                        changeLocation(url);

                    } else {
                        alert("Username or Password is incorrect");
                    }

                }
            });

        });

    });

    function changeLocation(url) {
        window.location.href = "project/profile1.html";
    }

});
