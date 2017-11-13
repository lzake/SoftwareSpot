$('document').ready(() => {
  'use strict'

  var techURL = "https://softspotdatabase.herokuapp.com/tech"
  var reviewsURL = "https://softspotdatabase.herokuapp.com/reviews/"

  function getIDfromURL() {
    var id = location.search
    id = id.split('=')
    id = id[1]
    return id
  }

  $.get(reviewsURL + getIDfromURL(), function(data) {
    var rating = 0
    for (var i = 0; i < data.length; i++) {
      rating += data[i]['rating']
    }
    rating = (rating / data.length).toFixed(2)
    $("#avg-rating").append(rating)
    for (var i = 0; i < data.length; i++) {
      $("#reviews").append(`
        <div class="techpage-review">
          <h1>${data[i].title}</h1>
          <p>${data[i].body}</p>
          <span>Rating: ${data[i].rating}</span>
        </div>
      `)
    }

  }).then($.get(techURL + '/byId?id=' + getIDfromURL(), function(data2) {
    $("#category-name").append(data2[0]['category'])
    $("#description").append(data2[0]['description'])
    $("#tech-img").attr("src", "https://logo.clearbit.com/" + data2[0]['url'])
  }).then($.get(techURL, function(data3) {
    console.log(data3)
    var arr = []
    for (var i = 0; i < data3.length; i++) {
      if (data3[i]['category'] === data3[getIDfromURL() - 1]['category']) {
        if (data3[i]['name'] !== data3[getIDfromURL() - 1]['name']) {
          arr.push(data3[i])
        }
      }
    }
    for (var i = 0; i < arr.length; i++) {
      $("#related-tech").append(`
            <div class="related">
              <a href="tech.html?id=${arr[i].id}">${arr[i].name}</a>
              <img src="https://logo.clearbit.com/${arr[i].url}">
            </div>
          `)
    }

  })))

})
