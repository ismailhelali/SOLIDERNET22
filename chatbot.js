const products = [
  { name: "farine", price: 29.99, category: "Category 1", description: "This is a sample product in Category 1." },
  { name: "fromage", price: 39.99, category: "Category 2", description: "This is a sample product in Category 2." },
  { name: "beurre", price: 49.99, category: "Category 1", description: "This is a sample product in Category 1." },
  { name: "cacao", price: 59.99, category: "Category 2", description: "This is a sample product in Category 2." },
  { name: "penne", price: 69.99, category: "Category 1", description: "This is a sample product in Category 1." }
];

const chatForm = document.querySelector('#chat-form');
const chatInput = document.querySelector('#chat-input');
const chatLog = document.querySelector('#chat-log');

chatForm.addEventListener('submit', event => {
  event.preventDefault();
  
  const userMessage = chatInput.value.toLowerCase().trim();

  let responseMessage = "I'm sorry, I didn't understand your request.";
  if (userMessage.includes('category')) {
    const category = userMessage.split('category')[1].trim();
    const filteredProducts = products.filter(product => product.category.toLowerCase() === category);
    if (filteredProducts.length > 0) {
      responseMessage = `Here are some products in the ${category} category: ${filteredProducts.map(product => product.name).join(', ')}`;
    } else {
      responseMessage = `There are no products in the ${category} category.`;
    }
  } else if (userMessage.includes('product')) {
    const product = userMessage.split('product')[1].trim();
    const selectedProduct = products.find(p => p.name.toLowerCase() === product);
    if (selectedProduct) {
      responseMessage = `${selectedProduct.name} - $${selectedProduct.price} - ${selectedProduct.description}`;
    }
  } else if (userMessage.includes('help')) {
    responseMessage = `I can help you find products by category or specific product information. Try asking for 'products in category [category name]' or 'info about product [product name]'.`;
  }
 
  const responseNode = document.createElement('div');
  responseNode.classList.add('chat-message', 'chat-message-response');
  responseNode.innerHTML = responseMessage;
  chatLog.appendChild(responseNode);

  chatInput.value = '';
  chatLog.scrollTop = chatLog.scrollHeight;
});
