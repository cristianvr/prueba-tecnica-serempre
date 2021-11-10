window.onload = ()=>{
    
    var total = 295.95; 

    var warantyVal = 0;
    var supportVal = 0;

    var cardWaranty1 = document.getElementById("cardWaranty1");
    var cardWaranty2 = document.getElementById("cardWaranty2");

    var cardSupport1 = document.getElementById("cardSupport1");
    var cardSupport2 = document.getElementById("cardSupport2");

    cardWaranty1.addEventListener("click", ()=>{
        cardWaranty2.style.border = "2px solid #B6BCC6";
        cardWaranty1.style.border = "2px solid #1E96D4";

        warantyVal = 0;

        setTotal(supportVal,warantyVal,total);
    })

    cardWaranty2.addEventListener("click", ()=>{
        cardWaranty1.style.border = "2px solid #B6BCC6";
        cardWaranty2.style.border = "2px solid #1E96D4";
        
        warantyVal = 75;
        
        setTotal(supportVal,warantyVal,total);
    });

    cardSupport1.addEventListener("click", ()=>{
        cardSupport2.style.border = "2px solid #B6BCC6";
        cardSupport1.style.border = "2px solid #1E96D4";

        supportVal = 0;

        setTotal(supportVal,warantyVal,total);
    })

    cardSupport2.addEventListener("click", ()=>{
        cardSupport1.style.border = "2px solid #B6BCC6";
        cardSupport2.style.border = "2px solid #1E96D4";
        
        supportVal = 25;

        setTotal(supportVal,warantyVal,total);
    });
}

function setTotal(supportVal,warantyVal,total){
    let val = total + supportVal +warantyVal;
    var totalPriceTag = document.getElementById("totalPrice");
    totalPriceTag.innerHTML = `$${val}`;
}