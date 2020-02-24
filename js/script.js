console.log("formative3-1 NewsAPI");

//$('#homeSec').hide();
$('#aboutSec').hide();
$('#articleSec').hide();


$(document).ready(function(){

  //show home page
  $('#home').on('click',function(){
    $('#homeSec').show();
    $('#aboutSec').hide();
    $('#articleSec').hide();
  });

  //show about page
  $('#about').on('click',function(){
    $('#aboutSec').show();
    $('#homeSec').hide();
    $('#articleSec').hide();
  });

  //show articles page
  $('#articles').on('click',function(){
    $('#articleSec').show();
    $('#homeSec').hide();
    $('#aboutSec').hide();
  });

  $('#view').on('click',function(){
    $('#articleSec').show();
    $('#homeSec').hide();
    $('#aboutSec').hide();
  });

  // $('#country').on('click',function(){
  //   $('#source').hide();
  //
  // });
  //
  // $('#source').on('click',function(){
  //   $('#country').hide();
  //   $('#category').hide();
  // });


  //accessing key from json file
  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;
  console.log(myKey);


 // retrieve value from user
document.getElementById('submit').addEventListener('click', function(){

  var country = document.getElementById('country').value;
  var category = document.getElementById('category').value;
  var source = document.getElementById('source').value;
  console.log(country, category, source);

  displayData(country, category, source);


});


// display all the data
function displayAll(){
  $.ajax({
    url : `http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${myKey}`,
    type : 'GET',
    data : 'json',
    success : function(data){
    console.log(data);


      document.getElementById('result').innerHTML ='';
      var i;
      for (i = 0; i < data.articles.length; i++) {

        document.getElementById('result').innerHTML +=
        '<div class="col col-sm-6 col-md-3 col-lg-3 my-3">' +
          '<div class="card" style="width: 18rem;">' +
            '<img class="card-img-top" src="' + data.articles[i].urlToImage + '" alt="image"></img>' +
            '<div class="card-body">' +
                '<h4>' + data.articles[i].title + '</h4>' +
                '<p>By: ' + data.articles[i].author + '</p>' +
                '<p>Posted: ' + data.articles[i].publishedAt + '</p>' +
                '<p>' + data.articles[i].description + '</p>' +
                // '<p>Author: ' + data.articles[i].author + '</p>' +
                '<a class="card-link" href="' + data.articles[i].url + '" target="_blank">Read more..</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      }

    },

    error : function(){
      console.log('error');
    }


  }); //ajax ends


} //end of displayAll

  displayAll();


 // access data from api key and display data
function displayData(nation, cat, so){

    console.log(nation, cat, so);

  //retrieve data with ajax method
  $.ajax({
    url : `http://newsapi.org/v2/top-headlines?country=${nation}&category=${cat}&sources=${so}&apiKey=${myKey}`,
    // url : url,
    type : 'GET',
    data : 'json',
    success : function(data){
    console.log(data);



      document.getElementById('result').innerHTML ='';
      var i;
      for (i = 0; i < data.articles.length; i++) {

        document.getElementById('result').innerHTML +=
        '<div class="col col-sm-6 col-md-3 col-lg-3 my-3">' +
          '<div class="card" style="width: 18rem;">' +
            '<img class="card-img-top" src="' + data.articles[i].urlToImage + '" alt="image"></img>' +
            '<div class="card-body">' +
                '<h4>' + data.articles[i].title + '</h4>' +
                '<p>By: ' + data.articles[i].author + '</p>' +
                '<p>Posted: ' + data.articles[i].publishedAt + '</p>' +
                '<p>' + data.articles[i].description + '</p>' +
                // '<p>Author: ' + data.articles[i].author + '</p>' +
                '<a class="card-link" href="' + data.articles[i].url + '" target="_blank">Read more..</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      }

    },

    error : function(){
      console.log('error');
    }


  }); //ajax ends


} // function display data ends here





}); //document ready ends
