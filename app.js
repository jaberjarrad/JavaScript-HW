// variable for data.js
var tableData = data;

//variable for body of html table
var tbody = d3.select("tbody");

//console log to verify data file
console.log(data)

// loop through each sighting and append rows and data to table body
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

// add input to search through sightings list
// Select the submit button
var submit = d3.select("#filter-btn");


submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    //filter the date based on user input value
    var filteredData = data.filter(date => date.datetime === inputValue);

    //console log input value and filtered data for verification
    console.log(inputValue);
    console.log(filteredData);

    //clear initial table data
    tbody.html("");

    //for loop to add filtered data as rows to the table
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });     
});