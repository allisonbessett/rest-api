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
  
  
   function updateArray(book, author) {
    arr.push({tBook: book, tAuthor: author});
  }
  function updateTable() {
    $('#bookTable tbody').html('<tr></tr>');
    for (var i = 0; i < arr.length; i++) {
    $('#bookTable tBody').append('<tr><td>' + arr[i].tBook + '</td>' + '<td>' + arr[i].tAuthor + '</td>' + '<td>' + "<button type = 'button' id='edit_button'>Edit</button>" + '</td>' + '<td>' + "<button type='button' id = 'delete_button'>Delete</button>" + '</td>' + '</tr>'); 
    count++;
    }
    
  }
  
  $('#submit').on('click', function (e) {
    e.preventDefault();
    var book = $('#book').val();
    var bookName = {
      book: book
    };
    
    createbookName(bookName);
    bookTable.show();
    bookForm.hide();
  
  });
  
  //------------
  
});