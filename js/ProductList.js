$().ready(function() {
  
    var url = "http://LocalHost:8080/Products/List";

    // make JSON call
    $.getJSON(url)
        .then(function(jsonResponse) { //.then is called by jquery if ajax call is successful. We get back jsonResponse
            console.log(jsonResponse);
            render(jsonResponse);
        }); 

});

 function render(jsonResponse) {
    var tbody = $("#tb");
    var products = jsonResponse.data;

    tbody.empty(); // clears any HTML tags within tbody

    for(var product of products) { // just like an enhanced for loop
        var row = "<tr>";
        row += "<td>" + product.id            + "</td>";
        row += "<td>" + product.name          + "</td>";
        row += "<td>" + product.price         + "</td>";
        row += "<td>" + product.vendor.name   + "</td>"
        row += "</tr>";

        // put row in tbody tag
        tbody.append(row);
    }
 }