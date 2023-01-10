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

const conversation = [
    {
        customer: "",
        ai: "Bonjour, je suis un Assistant virtuel. Comment puis-je vous aider aujourd'hui?"
    },
    {
        customer: "Je suis intéressé par l'achat d'un produit.",
        ai: "Très bien, dans quelle catégorie de produits êtes-vous intéressé? Nous avons des produits alimentaires, des emballages, des produits d'entretien, etc."
    },
    {
        
        customer: "J'ai un restaurant et je cherche des produits pour mon entreprise.",
        ai: "D'accord, pouvez-vous me dire un peu plus sur votre entreprise? Quel type de restaurant avez-vous? Ou quelle est l'utilisation des produits recherché?"
    },
    {
        customer: "J'ai un restaurant de livraison de pizza.",
        ai: "Super, nous avons une grande sélection de produits qui conviennent à votre entreprise, tels que des ingrédients pour la pizza, des boîtes à pizza, des sacs kraft, etc. Est-ce que vous avez d'autres questions sur les produits disponibles?"
    },
    {
        customer: "J'aimerais une estimation.",
        ai: "Bien sûr, je peux vous donner une estimation pour les produits que vous avez sélectionnés. Pouvez-vous me dire lesquels vous avez choisis?"
    }
];

    let responseMessage;
    
    if (currentStep === 0) {
        responseMessage = conversation[0].ai;
        currentStep++;
    
    } else if (currentStep === 1 && userMessage.includes("restaurant")) {
        responseMessage = conversation[1].ai;
        currentStep++;
    } else if (currentStep === 2 && userMessage.includes("pizza")) {
        responseMessage = conversation[2].ai;
        currentStep++;
    } else if (currentStep === 3 && userMessage.includes("estimation")) {
        responseMessage = conversation[3].ai;
    } else if (userMessage.includes('category')) {
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
    } else {
        responseMessage = "I'm sorry, I didn't understand your request.";
    }

    const responseNode = document.createElement('div');
    responseNode.classList.add('chat-message', 'chat-message-response');
    responseNode.innerHTML = responseMessage;
    chatLog.appendChild(responseNode);

    chatInput.value = '';
    chatLog.scrollTop = chatLog.scrollHeight;
});
