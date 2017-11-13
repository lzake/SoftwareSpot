$('document').ready(() => {
  'use strict';

  //GLOBAL VARIABLES **********************************************************************************************************************************************************************

  // JAVASCRIPT VARIABLES

  let dbUrl = 'https://softspotdatabase.herokuapp.com';
  let localDB = 'http://localhost:3000/reviews';
  let daTa = {};
  let tech_id;

  // will have categories as key and array of tech as value
  let techSortedByCategories = {
    'TE': [],
    'Software': [],
    'Language': [],
    'Markup Language': [],
    'Library': []
  };

  // jQUERY VARIABLES
  let $addTechReviewForm = $('#addTechReviewForm');
  let $techCatSelect = $('#techCatSelect');
  let $techTechSelect = $('#techTechSelect');
  let $techAddTitle = $('#techAddTitle');
  //BUG BELOW VAR NOT WORKING....WITH addTechREviewForm
  let $techAddRating = $("input[type='radio']:checked");
  let $techAddText = $('#techAddText');

  //FUNCTIONS **********************************************************************************************************************************************************************

  function getFormData() {}

  //sort tech data into categories
  function sortTechCategories(data) {
    //data is array of obj
    //key is index: value is tech obj

    data.forEach((tech) => {

      let category = tech.category;

      switch (category) {
        case 'TE':
          techSortedByCategories['TE'].push(tech);
          break;
        case 'Software':
          techSortedByCategories['Software'].push(tech);
          break;
        case 'Language':
          techSortedByCategories['Language'].push(tech);
          break;
        case 'Markup Language':
          techSortedByCategories['Markup Language'].push(tech);
          break;
        case 'Library':
          techSortedByCategories['Library'].push(tech);
          break;
        default:
          console.log(`no category match for ${tech.name}`);
      }
    });
  }
  // add options to tech select
  function createTechOptions(techChosen) {
    $techTechSelect.append('<option >Select<option>')
    let techChoicesArray = techSortedByCategories[techChosen];
    techChoicesArray.forEach((tech) => {
      let techName = tech.name;
      let techId = tech.id;
      let optionLi = `<option data-techId="${techId}">${techName}<option>`;
      $techTechSelect.append(optionLi);
    });
  }

  // EVENT/CLICK HANDLERS **********************************************************************************************************************************************************************

  $techCatSelect.change(() => {
    let techSelected = $('select option:selected').attr('data-category');
    console.log(techSelected);
    $techTechSelect.empty();
    createTechOptions(techSelected);
  });

  //BUG need to user AuthO for user id
  //BUG need a way to get tech id or change to tech_name as PK
  $addTechReviewForm.submit((event) => {
    let username_id;

    let reviewData = {
      title: $techAddTitle.val(),
      body: $techAddText.val(),
      rating: $("input[type='radio']:checked").val(),
      username_id: 1,
      tech_id: 1
    }
    //update tech_id var so tech.html page can be dynamically updated with this tech reviewed upon redirect
    tech_id = reviewData.tech_id;

    JSON.stringify(reviewData);
    sendTechReview(reviewData);
  });

  //AJAX CALLS **********************************************************************************************************************************************************************

  // get Tech List Option data
  $.ajax({
    type: "GET",
    url: `${dbUrl}/tech`,
    data: daTa,
    async: true,
    crossDomain: true,
    success: function(response) {
      sortTechCategories(response);
    }
  });

  // send Tech reviewData

  function sendTechReview(dataR) {
    $.ajax({
      type: "POST",
      url: `${dbUrl}`,
      data: dataR,
      async: true,
      crossDomain: true,
      success: function(response) {

        //BUG renderTechPageData not created yet
        //send user back to tech page of tech reviewed
        renderTechPageData(tech_id);
      }
    });
  }

  //FUNCTION CALLS **********************************************************************************************************************************************************************

});
