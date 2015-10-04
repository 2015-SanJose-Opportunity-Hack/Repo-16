$('#tags').textext({
    plugins : 'tags autocomplete'
}).bind(
        'getSuggestions',
        function(e, data) {
            var list = [
                    'Painting', 'Cooking', 'Baking', 'Henna', 'Tatoo', 'Face Painting', 'Jewellery', 'Software Project', 'Runner', 'Java',
                    'Java Script', 'CSS', 'HTML5'

            ], textext = $(e.target).textext()[0], query = (data ? data.query : '') || '';

            $(this).trigger('setSuggestions', {
                result : textext.itemManager().filter(list, query)
            });
        });
