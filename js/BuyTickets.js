


function getTicket() {

    const basePrice = 200;
    
    let category = document.getElementById("ticket_category").value;
    let quantity = document.getElementById("ticket_quantity").value;
    console.log(quantity);
    let total = 0;

    if (category == "1") {
        console.log(1)
        total=basePrice - basePrice * 0.80;
        total= total * quantity;
    } else if (category == "2") {
        console.log(2)
        total=basePrice - basePrice * 0.50;
        total= total * quantity;
    } else if (category == "3") {
        console.log(3)
        total = basePrice - basePrice * 0.15;
        total= total * quantity;
    } else {
        total = parseInt(basePrice);
        total = total * quantity;
    }
    document.getElementById("ticket_total").value = total;
    console.log(total);
    
   

   


}