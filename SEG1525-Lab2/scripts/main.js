class Entity {
  constructor(name, lactose, nut, vegetarian, gluten, organic) {
    this.name = name;
    this.lactose = lactose;
    this.nut = nut;
    this.vegetarian = vegetarian;
    this.gluten = gluten;
    this.organic = organic;
  }
}

class Item extends Entity{
  constructor(name, lactose, nut, vegetarian, gluten, organic, price){
    super(name, lactose, nut, vegetarian, gluten, organic);
    this.price = price;
  }
}

var inventory = [new Item("Pasta", true, true, true, false, false, 1.99),
                new Item("Yogurt", false, true, true, true, true, 2.99),
                new Item("Broccoli", true, true, true, true, true, 3.79),
                new Item("Apples", true, true, true, true, true, 3.99),
                new Item("Almonds", true, false, true, true, true, 3.99),
                new Item("Milk", false, true, true, true, true, 4.99),
                new Item("Eggs", true, true, false, true, true, 5.99),
                new Item("Strawberries", true, true, true, true, true, 6.99),
                new Item("Salmon", true, true, false, true, true, 10.99),
                new Item("Steak", true, true, false, true, true, 15.99)]

var available = "";
var selected = [];
var items = [];
var bill = "";
var client = new Entity();

var profile = document.getElementById("profile")
var products = document.getElementById("products");
var cart = document.getElementById("cart");

profile.style.display = "block";
products.style.display = "none";
cart.style.display = "none";

function upadateClient(){
  client.name = document.getElementById("name").value;
  client.lactose = document.getElementById("lactose").checked;
  client.nut = document.getElementById("nut").checked;
  client.vegetarian = document.getElementById("vegetarian").checked;
  client.gluten = document.getElementById("gluten").checked;
  client.organic = document.getElementById("organic").checked;

}

function clientInfo(){
  profile.style.display = "block";
  products.style.display = "none";
  cart.style.display = "none";
  upadateClient();
}

function myCart(){
  profile.style.display = "none";
  products.style.display = "none";
  cart.style.display = "block";

  items = [];
  for (var i = 0; i < document.getElementById("displayProduct").childNodes.length; i++){
    if(document.getElementById("displayProduct").childNodes[i].checked){
      items.push(document.getElementById("displayProduct").childNodes[i].id);
    }
  }

  bill = "<p>";
  var total = 0;
  for(var i = 0; i < inventory.length; i++){
    for(var x = 0; x < items.length; x++){
      if(inventory[i].name === items[x]){
        bill += inventory[i].name + " - " + inventory[i].price + "<br>";
        total += inventory[i].price;
      }
    }
  }
  bill += "</p><br><p>Your total is: $" + Math.round(total * 100) / 100 + "</p>";

  document.getElementById("displayCart").innerHTML = bill;

}

function myProducts(){
  upadateClient();
  profile.style.display = "none";
  products.style.display = "block";
  cart.style.display = "none";

  if(client.name != null && client.name != ""){
    document.getElementById("welcomeMessage").innerHTML = "Hi " + client.name + ",";
  }

  available = "";
  selected = [];
  selected2 = [];
  for (var i = 0; i < document.getElementById("displayProduct").childNodes.length; i++){
    var element = document.getElementById("displayProduct").childNodes[i]
    if(element.checked){
      selected.push(element.id);
      selected2.push(element.id);
    }
  }

  for(var i = 0; i < inventory.length; i++){
    if((inventory[i].lactose == client.lactose || !client.lactose) &&
      (inventory[i].nut === client.nut || !client.nut) &&
      (inventory[i].vegetarian === client.vegetarian || !client.vegetarian) &&
      (inventory[i].gluten === client.gluten || !client.gluten) &&
      (inventory[i].organic === client.organic || !client.organic) && !selected.includes(inventory[i].name)){
        selected.push(inventory[i].name);

      }
  }

  for (var i = 0; i < inventory.length; i ++){
    for(var x = 0; x < selected.length; x++){
      if(inventory[i].name === selected[x]){
        if(selected2.includes(selected[x])){
          available += "<input type='checkbox' id='" + inventory[i].name + "' name='" + inventory[i].name + "' value='"+ inventory[i].name + "' checked><label for='" + inventory[i].name + "'>"  + inventory[i].name + " - $" + inventory[i].price + "</label><br></input>";
        } else {
          available += "<input type='checkbox' id='" + inventory[i].name + "' name='" + inventory[i].name + "' value='"+ inventory[i].name + "'><label for='" + inventory[i].name + "'>"  + inventory[i].name + " - $" + inventory[i].price + "</label><br></input>";
        }
      }
    }

  }

  document.getElementById("displayProduct").innerHTML = available;

}

function confirm(){
  alert("Thank you for shopping at Stella Foods!\n" +
          "Your order will be ready in 45-50 minutes")
}
