/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  
  var bookForm = $('#bookForm'), bookTable = $('#bookTable');

  var base_url = "https://pacific-meadow-64112.herokuapp.com/data-api/";
  var collection = "abessett";
  
  var bookForm = $('#bookForm').hide();
  
  $('#addItemButton').on('click', function (e) {
    bookForm.show();
    bookTable.hide();
  });
  
});