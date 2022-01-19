const isCreditCardNumberValid = (cardNumber) => {
    let num = Array.from(String(cardNumber), Number);
    let conditions = [
        typeof(cardNumber) == 'number',
        num.length === 16,
        (num[num.length - 1] % 2) === 0,
        num.reduce((a, b) => a + b) > 16,
        same(num)
    ];
    // Checking at least two different num
    function same(arr){
        if(arr.every( v => v === arr[0]))
            return false;
        else
            return true;
    }
    // Checking conditions
    for(let i = 0; i < conditions.length; i++){
        if(conditions.includes(false))
            return 'Please enter 16 digit number';
        else
            return 'Valid';
    }
}



