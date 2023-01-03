<script>
  
  $(document).ready(function() {
  var products = [];

  // Add quantities and units to products
  $('li').append('<input type="number" min="1" value="1">');
  $('li').append('<select><option>unit</option><option>kg</option><option>g</option><option>lbs</option></select>');

  // Add products to array when checked
  $('input[type="checkbox"]').click(function() {
    var product = $(this).parent();
    var name = product.text();
    var quantity = product.find('input[type="number"]').val();
    var unit = product.find('select').val();
    if ($(this).is(':checked')) {
      products.push({name: name, quantity: quantity, unit: unit});
    } else {
      products = products.filter(item => item.name !== name);
    }
  });

  // Show only products in selected category
  $('#category-select').change(function() {
    var category = $(this).val();
    if (category === 'all') {
      $('ul').show();
    } else {
      $('ul').hide();
      $('#' + category).show();
    }
  });

  // Show all products when "Show All" button is clicked
  $('#show-all-btn').click(function() {
    $('ul').show();
  });

  // Filter products when search input is used
  $('#search').keyup(function() {
    var searchTerm = $(this).val().toLowerCase();
    $('li').each(function() {
      var name = $(this).text().toLowerCase();
      if (name.includes(searchTerm)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // Generate PDF when form is submitted
  $('form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var doc = new jsPDF();
    doc.text(20, 20, 'Name: ' + name);
    doc.text(20, 30, 'Phone: ' + phone);
    doc.text(20, 40, 'Ordered Products:');
    var y = 50;
    products.forEach(function(product) {
      doc.text(20, y, product.name + ': ' + product.quantity + ' ' + product.unit);
      y += 10;
    });
    doc.save('order.pdf');
  });
});

</script>
