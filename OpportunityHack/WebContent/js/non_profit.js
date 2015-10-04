$(document)
        .ready(
                function() {
                    var availableTags = [
                            "Saburi Charity", "Give Light", "Wikimedia", "BARC", "Acumen Fund", "Partners in Health", "Teach for America",
                            "Teach for India", "Action Health", "AIDS InfoShare", "Aliasing Group", "Alpha Care",
                            "Amazing Grace Children Center", "Amnesty International", "AntiTerrorism Force", "Civil Society Institute"
                    ];
                    $("#tags").autocomplete({
                        source : availableTags
                    });

                    $('#filter')
                            .click(

                                    function() {
                                        alert("Button clicked");
                                        $
                                                .getJSON(
                                                        "json/org.json",
                                                        function(data) {
                                                            alert(JSON.stringify(data));
                                                            var html = ";"

                                                            $
                                                                    .each(
                                                                            data,
                                                                            function(key, val) {
                                                                                // alert(val.name);
                                                                                if ($('#tags').val() === val.name) {

                                                                                    html += "<hr class=\"featurette-divider\"><div class=\"featurette\"><img class=\"featurette-image pull-right\"src=\"" +
                                                                                            val.img +
                                                                                            "\"> <h2 id=\"npo_heading\" class=\"featurette-heading\">" +
                                                                                            val.name +
                                                                                            ". <span id=\"npo_subheading\" class=\"muted\">" +
                                                                                            val.npo_subheading +
                                                                                            "</span></h2> <p class=\"lead\"><b>About :</b><span id=\"about\">" +
                                                                                            val.about +
                                                                                            "</span></p> <p class=\"lead\"><b>Mission:</b><span id=\"mission\">" +
                                                                                            val.mission +
                                                                                            "</span> </p> <p class=\"lead\"><b>Location:</b><span id=\"location\">" +
                                                                                            val.location +
                                                                                            "</span> </p> <p class=\"lead\"><b>User Ratings :</b><span id=\"rating\">" +
                                                                                            val.rating +
                                                                                            "</span> &nbsp;&nbsp; <b>Number of Users Rated : </b><span id=\"no_of_rating\">" +
                                                                                            val.no_of_rating + "</span></p> </div>";

                                                                                }

                                                                            });
                                                            $('#content').append(html);
                                                        });

                                    });
                });
