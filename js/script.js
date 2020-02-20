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

  $.ajax({
    // url : `http://newsapi.org/v2/top-headlines?country=us&apiKey=1a9818ada3194ab28335127795b6d9e3`,
    url : `http://newsapi.org/v2/top-headlines?country=us&apiKey=${myKey}`,
    type : 'json',
    success : function(data){
      console.log(data);

      var i;
      for (i = 0; i < data.article.length, i++){
        document.getElementById('result').innerHTML +=
         '<p>ID: ' + data.article[i].source.id + '</p>'
      }
    },

    error : function(){
      console.log('error');
    }



  }); //ajax


}); //document ready
