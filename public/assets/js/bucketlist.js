$(function() {

$(".change-accomplished").on("click", function(event) {
    var id = $(this).data("id");
    var newAccom = $(this).data("data-newaccomplished");

    var newAccomState = {
      accomplished: newAccom
    };

    // Send the PUT request.
    $.ajax("/api/bucketlist/" + id, {
      type: "PUT",
      data: newAccomState
    }).then(
      function() {
        console.log("changed accomplished to", newAccom);
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