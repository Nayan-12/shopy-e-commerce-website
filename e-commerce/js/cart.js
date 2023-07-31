function add_to_cart(pid, pname ,price){

    let cart = localStorage.getItem("cart")
    if(cart == null){
        let products=[];
        let product= {productId:pid, productName:pname , productQuantity: 1 , productPrice: price};
        products.push(product);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    else{
        let pcart= JSON.parse(cart);

        let oldProduct = pcart.find((item)=>item.productId == pid)
        if(oldProduct){
            oldProduct.productQuantity = oldProduct.productQuantity + 1
            pcart.map((item)=>{
                if(item.productId == oldProduct.productId){
                    item.productQuantity = oldProduct.productQuantity;
                }
            })
            localStorage.setItem("cart", JSON.stringify(pcart));
        }
        else{
            let product = {productId: pid , productName:pname , productQuantity: 1, productPrice:price}
            pcart.push(product)
            localStorage.setItem("cart", JSON.stringify(pcart))
            console.log("product is added")
        }
    }
    updateCart();
}





//update cart

function updateCart(){
    let cartString = localStorage.getItem("cart");
    let cart = JSON.parse (cartString);
    if (cart == null){
        console.log("cart is empty")
        $("count").html("0");
        $("cart-body").html("<h3> Cart does not have any items</h3>");


    }
    else{
        $("count").html('(${cart.length})');
    }       

}