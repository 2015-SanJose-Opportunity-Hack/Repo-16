var category_data;
$('#textarea_autocomplete').textext({
    plugins : 'tags autocomplete'
}).bind('getSuggestions', function(e, data)
{

    //$.getJSON('../data/category.json', function(data){
    //    category_data = data.split(',');
    //    console.log(category_data);
    //});

    var category_data = [
            'Donations',
            'Face Paint',
            'Caricature',
            'Dance',
            'Software Engineer',
            'Running',
            'Food Service',
            'Teaching',
            'Cleaning',
            'Project Manager',
            'Health Services',
            'Exhibitions'
        ],
        textext = $(e.target).textext()[0],
        query = (data ? data.query : '') || ''
        ;

    $(this).trigger(
        'setSuggestions',
        { result : textext.itemManager().filter(category_data, query) }
    );
});


