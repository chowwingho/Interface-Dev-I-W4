// Combine rows and columns... we get a TABLE!
const allProducts = [
  { name: `Dress`,  size: [`S`, `M`, `L`, `XL`],  colour: [`red`, `yellow`, `blue`, `green`, `white`, `black`],      isInStock: false, price: `$14.99` },  // 0
  { name: `Tee`,   size: [`S`, `M`, `L`, `XL`],      colour: [`red`, `yellow`, `blue`, `green`, `white`, `black`],       isInStock: true, price: `$19.99` },  // 1
  { name: `Sweater`,   size: [`S`, `M`, `L`, `XL`], colour: [`red`, `yellow`, `blue`, `green`, `white`, `black`],        isInStock: true, price: `$23.99` },  // 2
  { name: `Skirt`, size: [`S`, `M`, `L`, `XL`],      colour: [`red`, `yellow`, `blue`, `green`, `white`, `black`], isInStock: true, price: `$13.99` },  // 3
];

// Takes: "char" (Object) holding character properties
// Return: HTML "<li>" (String) of that charcters profile
const formatCharacterToHtml = (product) => {

  let noStock = ``;
  if (product.isInStock == true) {
    
    noStock = `<span class="alive"> In Stock</span>`;
  } else {
    noStock = `<span class="dead"> Out of Stock</span>`;

  }

  return `
    <li>
      <h2>${product.name} ${noStock}</h2>
      <ul>
        <li>Available in sizes: ${product.size}</li>
        <li>Available in colours: ${product.colour}</li>
        <li>Price: ${product.price}</li>
      </ul>
    </li>`;
}


// Store the location of the list <ol>
const $favChar = document.getElementById(`favChar`);


// Create a variable to hold which character I want

let i = 0;
$favChar.innerHTML += formatCharacterToHtml( allProducts[i] );
i++;
$favChar.innerHTML += formatCharacterToHtml( allProducts[i] );
i++;
$favChar.innerHTML += formatCharacterToHtml( allProducts[i] );
i++;
$favChar.innerHTML += formatCharacterToHtml( allProducts[i] );



      

