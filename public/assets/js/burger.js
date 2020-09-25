$(function() {
    $(".devourbtn").on("click", function(event) { 
        var id = $(this).data("id");

        var newBurgerStatus = {
            devoured: true
        };
    
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerStatus
        }).then(
            function() {
                console.log("your burger has been devoured");
                location.reload();
            }
        );
    });
    
    $("#createBurger").on("submit", function(event) {
        event.preventDefault();
    
        let newBurger = {
          burger_name: $("#createBurger [name=burger]").val().trim()  
        };
    
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("created new burger");
            location.reload();
        });
    });
});