var symbols = '+';
var subtotal = 0 ;
var enternumber = '';
function AddChar(symbol){
    switch (symbol)
    {
        case '+' : SubTotal(); symbols = '+'; enterIfnomationIfFrontEnd(symbol);break;
        case '-' : SubTotal(); symbols = '-'; enterIfnomationIfFrontEnd(symbol);break;
        case '*' :  SubTotal();symbols = '*';enterIfnomationIfFrontEnd(symbol); break;
        case '/' : SubTotal(); symbols = '/';enterIfnomationIfFrontEnd(symbol); break;
        case '=' : Final();break;
        case 'C' : DeleteAllINFo(); break;
        default:
            enternumber+=symbol;
            enterIfnomationIfFrontEnd(symbol);
            break;
    }
}
function DeleteAllINFo()
{
    subtotal = 0 ;
    symbols = '';
    enternumber ='';
    document.getElementById("info").innerHTML = "";
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
}
function Final()
{
    SubTotal();
    document.getElementById("info").innerHTML = subtotal;
    
}
function enterIfnomationIfFrontEnd(symbol)
{
   document.getElementById("info").innerHTML  +=  symbol;
}
