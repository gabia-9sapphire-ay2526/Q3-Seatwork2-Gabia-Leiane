function lookDiscount(){
    // variable declaration
    let budget = document.getElementById("budget").value;
    let discValue = budget * .2;

    // display with JS Method
    document.getElementById("discount").innerHTML = '<div class="box mt-5"><h5>Recommended brands:</h5><button type="button" class="btn btn-outline-primary">Acer</button><button type="button" class="btn btn-outline-primary">Apple</button><button type="button" class="btn btn-outline-primary">Lenovo</button><br><br><h5>Eligible Discount:   <span class="badge bg-danger"> 14000.00</span></h5></div>';

}

function lookLocation(){
    
}