const selectOption = document.querySelector('.options') ;
let giftVouchers = document.querySelectorAll('.voucher-items') ;

// event listeners 
selectOption.addEventListener('click' , filterCards ) ;

// functions 
function filterCards(e) {
    // console.log(e.target.innerText) ;
    let text = e.target.innerText ;
    if(text == 'All') {
        giftVouchers.forEach((val) => {
            val.style.display = 'block' ;
        })
    }
    else if(text == 'Generic') {
        giftVouchers.forEach((val) => {
            if(val.classList.contains('combos')) 
                val.style.display = 'block' ;
            else
            val.style.display = 'none' ;
        })
    }
    else if(text == 'Occasion') {
        giftVouchers.forEach((val) => {
            if(val.classList.contains('occasion')) 
                val.style.display = 'block' ;
            else
            val.style.display = 'none' ;
        })
    }
    else if(text == 'Festival') {
        giftVouchers.forEach((val) => {
            if(val.classList.contains('festival')) 
                val.style.display = 'block' ;
            else
            val.style.display = 'none' ;
        })
    }
    else if(text == 'Combos') {
        giftVouchers.forEach((val) => {
            if(val.classList.contains('combos')) 
                val.style.display = 'block' ;
            else
            val.style.display = 'none' ;
        })
    }
}