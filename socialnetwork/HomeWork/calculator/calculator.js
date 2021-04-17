var symbols = '+';
var subtotal = 0 ;
var enternumber = '';
function AddChar(symbol){
    switch (symbol)
    {
        case '+' : SubTotal(); symbols = '+'; break;
        case '-' : SubTotal(); symbols = '-'; break;
        case '*' :  SubTotal();symbols = '*'; break;
        case '/' : SubTotal(); symbols = '/'; break;
        case '=' : SubTotal();break;
        case 'C' : DeleteAllINFo(); break;
        default:
            enternumber+=symbol;
            break;
    }
    enterIfnomationIfFrontEnd(symbol);
}
function DeleteAllINFo()
{
    subtotal = 0 ;
    symbols = '';
    enternumber ='';
    document.getElementById("#info").innerHTML = "";
}
function SubTotal(){
    if(enternumber === ''){
        return;
    }
    switch (symbols)
    {
        case '+' : subtotal += parseInt(enternumber); break;
        case '-' :  subtotal -= parseInt(enternumber); break;
        case '*' : subtotal *= parseInt(enternumber) ; break;
        case '/' :  subtotal /= parseInt(enternumber); break;
    }
    enternumber = '';
    console.log(subtotal);
}
function enterIfnomationIfFrontEnd(symbol)
{
   document.getElementById("#info").innerHTML +=  symbol;
}

var obekt1 = {naem : "test" , age : 34}
var test = [];
test.push();

for(var i= 0 ; i < 4 ; i++){}