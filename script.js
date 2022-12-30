// Add a product to the list
function addProduct() {
  // Get the product name
  var product = prompt("Enter the product name:");

  // Create a new table row
  var row = document.createElement("tr");

  // Create a cell for the product name
  var cell = document.createElement("td");
  cell.innerHTML = product;

  // Append the cell to the row
  row.appendChild(cell);

  // Get the product list element
  var productList = document.getElementById("product-list");

  // Create a table if it doesn't exist yet
  if (productList.getElementsByTagName("table").length === 0) {
    var table = document.createElement("table");
    productList.appendChild(table);
  } else {
    var table = productList.getElementsByTagName("table")[0];
  }

  // Append the row to the table
  table.appendChild(row);

  // Show the send button
  document.getElementById("send-button").style.display = "block";
}

// Send the table as a message
function sendTable() {
  // Get the name or company name
  var name = document.getElementById("name").value;

  // Get the product list element
  var productList = document.getElementById("product-list");

  // Create a string for the message
  var message = "Name/Company: " + name + "\n\nProducts:\n";

  // Loop through the rows in the table
  var rows = productList.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    // Add the product name to the message
    message += rows[i].getElementsByTagName("td")[0].innerHTML + "\n";
  }

  // Open the WhatsApp Web app
  window.open("https://web.whatsapp.com/send?text=" + encodeURIComponent(message));
}
