//Create GLOBAL variable below here on line 2
var global_result;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                global_result = result.feed.entry;
                console.log('AJAX Success function called, with the following result:', result);
                console.log(global_result);
                var movie1_image3 = global_result[0]['im:image'][2].label;

                var third_images = [];
                for (var i = 0; i < global_result.length; i++) {
                    third_images[i] = global_result[i]['im:image'][2].label;
                    console.log(third_images);
                }

                var movie_titles = [];
                var movie_directors = [];
                for (var i = 0; i < global_result.length; i++) {
                    movie_titles[i] = global_result[i]["im:name"].label;
                    movie_directors[i] = global_result[i]["im:artist"].label;
                    var element = $('<div><img src="' + third_images[i] + '"><p>Title: ' + movie_titles[i] + '</p><p>Director: ' + movie_directors[i] + '</p>');
                    $('#main').append(element);
                }
            }
        });
        console.log('End of click function');
    });
});