$(document).ready(function() {
    console.log("Let's get ready to party with jQuery!");
  
    $('article img').addClass('image-center');
  
    $('article p:last-child').remove();
  
    var randomSize = Math.floor(Math.random() * 90);
    $('#title').css('font-size', randomSize + 'px');
  
    $('ol').append('<li>New list item</li>');
  
    $('aside').empty().append('<p>Sorry for the list!</p>');
  
    $('input[type="number"]').on('input', function() {
        let red = $('input[name="red"]').val();
        let green = $('input[name="green"]').val();
        let blue = $('input[name="blue"]').val();
        $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
      });
  
    $('img').on('click', function() {
      $(this).remove();
    });
    
    $('#movie-form').submit(function(event) {
        event.preventDefault();
      
        var title = $('#title-input').val();
        var rating = $('#rating-input').val();
      
        if (title.length >= 2 && rating >= 0 && rating <= 10) {
          var movieElement = $('<div class="movie">').text(title + ' - ' + rating);
          var removeButton = $('<button class="remove-button">Remove</button>');
          
          removeButton.click(function() {
            movieElement.remove();
          });
      
          movieElement.append(removeButton);
          $('#movies-list').append(movieElement);
        } else {
          alert('Invalid input! Make sure title has at least 2 characters and rating is between 0 and 10.');
        }
      });
      
      // Sorting functionality
      $('#sort-by-title').click(function() {
        var movies = $('.movie').get();
        movies.sort(function(a, b) {
          var titleA = $(a).text().toUpperCase();
          var titleB = $(b).text().toUpperCase();
          return titleA.localeCompare(titleB);
        });
        $('#movies-list').empty().append(movies);
      });
      
      $('#sort-by-rating').click(function() {
        var movies = $('.movie').get();
        movies.sort(function(a, b) {
          var ratingA = parseFloat($(a).text().split('-')[1]);
          var ratingB = parseFloat($(b).text().split('-')[1]);
          return ratingA - ratingB;
        });
        $('#movies-list').empty().append(movies);
      });
      
  });
  