/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  
  var book = $('#book').val(), bookForm = $('#bookForm'), bookTable = $('#bookTable'), arr = [];
  
  var xhr = new XMLHttpRequest();
  
  xhr.onload = function () {
    if (xhr.status === 200) {
      book.innerHTML = xhr.responseText;
    }
  };
  
  bookForm = $('#bookForm').hide();
  
  $('#addItemButton').on('click', function (e) {
    bookForm.show();
    bookTable.hide();
  });

  function updateTable() {
    $('#bookTable tbody').html('<tr></tr>');
       console.log("working");
    var newContent = '';
    for (var i = 0; i < arr.length; i++) {
      $('#bookTable tBody').append('<tr><td>' + book + '</td>' + '</tr>'); 
    count++;
      book.innerHTML = newContent;
    }
  }
  
  xhr.open('GET', 'https://pacific-meadow-64112.herokuapp.com/data-api/abessett', true);
  xhr.send(null);
  
  $('#submit').on('click', function (e) {
    e.preventDefault();
    bookForm.hide();
    bookTable.show();
    var bookInfo = $
    });
  //------------
  

  
  function reportResponse(response) {
    $('#response').text(JSON.stringify(response, null, 4));
  }
  
  function reportAjaxError(jqXHR, textStatus, errorThrown) {
    $('#response').text("An error occurred from AJAX.");
  }
  
  function clearResponse() {
    $('#response').empty();
  }
  });