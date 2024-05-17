function inc(c)
{
    a = a + c;
    str = str + c;
    document.getElementById('result').innerHTML = str;
}
let a = '0';
let b;
let str = '0';
let operator = '0';
function equalTo(operator)
{
    result = (operator == '/') ? b/a: (operator == 'X') ? b*a: (operator == '-') ? b - a: (operator == '+') ? parseFloat(b) + parseFloat(a): a;
    document.getElementById('result').innerHTML = String(result);
    a = String(result);
    str = a;
    operator = '0';
}
function op(s)
{
    operator = s;
    if (operator != '0')
    {
        a = parseFloat(str) + '' ;
        str = a;
    }
    b = a;
    a = '';
    str = str + s;
    document.getElementById('result').innerHTML = str;
}