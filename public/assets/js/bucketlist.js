$(function() {

$(".change-status").on("click", 
  function(event) {
    var id = $(this).data("id");
    console.log(id);

    var newStatus = $(this).data("newstatus");
    console.log(newStatus);

    var newStatusState = {
      accomplished: newStatus
    };

    // console.log(newStatusState);

    // Send the PUT request.
    $.ajax("/api/bucketlist/" + id, {
      type: "PUT",
      data: newStatusState
    }).then(
      function() {
        console.log("changed status to", newStatus);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

 $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newItem = {
      item: $("#item").val().trim()
    }

    // Send the POST request.
    $.ajax("/api/bucketlist", {
      type: "POST",
      data: newItem
    }).then(
      function() {
        console.log("created new item");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

 $(".delete-item").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/bucketlist/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted item", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

}); 