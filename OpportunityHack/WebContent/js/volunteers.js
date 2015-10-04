$(document).ready(function() {
    var availableTags = [
            "Shruti Panda", "Abhishek Kharche", "Aniket Jadhav", "Jigar Gosalia", "Rahul Panigrahi", "Minesh Desai", "Michel Lascombe"
    ];
    $("#tags").autocomplete({
        source : availableTags
    });
});
