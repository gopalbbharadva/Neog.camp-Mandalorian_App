var input=document.querySelector("#tarea");
var btn=document.querySelector("#tbutton");
var output=document.querySelector("#outputdiv");

var apiurl="https://api.funtranslations.com/translate/mandalorian.json"


function geturl(txtinput)
{
    return apiurl+"?text="+txtinput;
}

function errorhandler(error)
{
    alert("Error occurred at server");
}
function print()
{
    var inputtext=input.value;
    fetch(geturl(inputtext)).
    then(response => response.json()).
    then(json =>console.log(output.innerText=json.contents.translated)).
    catch(errorhandler);    
}
btn.addEventListener("click",print)