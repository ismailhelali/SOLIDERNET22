<html>
<head>
    <title>E-Commerce Company</title>
</head>
<body>
    <h1>Welcome to Our E-Commerce Company</h1>
    <p>We specialize in food and packaging products at affordable prices.</p>
    <h2>Featured Products:</h2>
    <div id="featured-products">
        <!-- ReactJS code will go here to render featured products -->
    </div>
    <h2>Food Products:</h2>
    <div id="food-products">
        <!-- ReactJS code will go here to render food products -->
    </div>
    <h2>Packaging Products:</h2>
    <div id="packaging-products">
        <!-- ReactJS code will go here to render packaging products -->
    </div>
</body>
</html>
ReactJS Code:

const FeaturedProducts = (props) => {
return (
<div>
<h3>Featured Product 1</h3>
<img src="featured-product-1.jpg" alt="Featured Product 1" />
<p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec erat auctor, lacinia massa at, facilisis diam. Nam placerat sem a tortor tempus, at mollis eros rhoncus. Praesent vel velit velit. Pellentesque placerat, purus at dignissim eleifend, ipsum purus condimentum ipsum, id tincidunt enim ante at nunc.</p>
<button>Add to Cart</button>
<hr />
<h3>Featured Product 2</h3>
<img src="featured-product-2.jpg" alt="Featured Product 2" />
<p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec erat auctor, lacinia massa at, facilisis diam. Nam placerat sem a tortor tempus, at mollis eros rhoncus. Praesent vel velit velit. Pellentesque placerat, purus at dignissim eleifend, ipsum purus condimentum ipsum, id tincidunt enim ante at nunc.</p>
<button>Add to Cart</button>
<hr />
<h3>Featured Product 3</h3>
<img src="featured-product-3.jpg" alt="Featured Product 3" />
<p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec erat auctor, lacinia massa at, facilisis diam. Nam placerat sem a tortor tempus, at mollis eros rhoncus. Praesent vel velit velit. Pellentesque placerat, purus at dignissim eleifend, ipsum purus condimentum ipsum, id tincidunt enim ante at nunc.</p>
<button>Add to Cart</button>
</div>
);
}

const FoodProducts = (props) => {
return (
