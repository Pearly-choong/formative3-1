console.log("formative3-1 NewsAPI");

$(document).ready(function(){
  // $('h1').click(function(){
  //   $(this).hide();
  // });
  // accessing key from json file

  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;
  console.log(myKey);


document.getElementById('submit').addEventListener('click', function(){

  var country = document.getElementById('country').value;
  console.log(country);
});



  $.ajax({
    // url : `http://newsapi.org/v2/top-headlines?country=us&apiKey=1a9818ada3194ab28335127795b6d9e3`,
    url : `http://newsapi.org/v2/top-headlines?country=us&apiKey=${myKey}`,
    type : 'GET',
    data : 'json',
    success : function(data){
      console.log(data);

      var i;
      for (i = 0; i < data.articles.length; i++) {

        document.getElementById('result').innerHTML +=
        '<div class="col col-sm-6 col-md-3 col-lg-3 my-3">' +
          '<div class="card" style="width: 18rem;">' +
            '<img class="card-img-top" src="' + data.articles[i].urlToImage + '" alt="image"></img>' +
            '<div class="card-body">' +
                '<h4>' + data.articles[i].title + '</h4>' +
                '<p>' + data.articles[i].description + '</p>' +
                '<p>Author: ' + data.articles[i].author + '</p>' +
                '<a class="card-link" href=" ' + data.articles[i].url + '">Read more..</a>' +
            '</div>' +
          '</div>' +
        '</div>'
      }
    },

    error : function(){
      console.log('error');
    }



  }); //ajax


}); //document ready
