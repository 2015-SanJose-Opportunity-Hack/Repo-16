$( document ).ready(function() {

$(function() {

    var category_data;

    $.get("data/category.txt", function(data){
        category_data = data.split(',');

        console.log(category_data);
        $('#search_admin').autocomplete({
            source: category_data

        });

    })

});

var search_results="";

    $("#search_button").on('click', function(e){

        $.get("data/search_results.txt", function(data){
            search_results=data;

            $("#search_results").html(data);
        });
    });

    $("#running_tag").on('click', function(e){

        $.get("data/search_runners.txt", function(data){

            search_results=data;

            $("#search_results").html(data);
        });
    });

    $("#teaching_tag").on('click', function(e){

        $.get("data/search_teachers.txt", function(data){

            search_results=data;

            $("#search_results").html(data);
        });
    });

    $("#nearby_volunteers").on('click', function(e){

        $.get("data/nearby.txt", function(data){

            search_results=data;

            $("#search_results").html(data);
        });
    });


    $("#dance_tag").on('click', function(e){

        $.get("data/search_runners.txt", function(data){

            search_results=data;

            $("#search_results").html(data);
        });
    });


    $("#painter_tag").on('click', function(e){

        $.get("data/nearby.txt", function(data){

            search_results=data;

            $("#search_results").html(data);
        });
    });


    $("#jumper_tag").on('click', function(e){

        $.get("data/search_teachers.txt", function(data){

            search_results=data;

            $("#search_results").html(data);
        });
    });


    $("#donors_volunteers").on('click', function(e){

        $.get("data/nearby.txt", function(data){

            search_results=data;

            $("#search_results").html(data);
        });
    });

});