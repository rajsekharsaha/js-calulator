function sol(){
    var first = document.getElementsByClassName('fst')[0].value;
    var secound = document.getElementsByClassName('fst')[0].value;
    var opr = document.getElementsByClassName('opr')[0].value;
    

    if(opr=="+"){
        var resu = parseInt(first)+parseInt(secound);
    }if(opr=="-"){
        var resu = parseInt(first)-parseInt(secound);
    }if(opr=="*"){
        var resu = parseInt(first)*parseInt(secound);
    }if(opr=="/"){
        var resu = parseFloat(first)/parseFloat(secound);
    }

    var res = document.getElementsByClassName('res')[0].value=resu;



}

function del(){
    cel();
}

function cel(){
    var first = document.getElementsByClassName('fst')[0].value="";
    var secound = document.getElementsByClassName('snd')[0].value="";
    var res = document.getElementsByClassName('res')[0].value = "";

}