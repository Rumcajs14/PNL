f = document.getElementById('form');
i = document.getElementById("imie");
n = document.getElementById("nazwisko");
m = document.getElementById("miasto");
p = document.getElementById("pesel");

f.guzik.addEventListener("change", function(e) {przycisk(this); })
f.imie.addEventListener("change", function(e) {walid0(this); })
f.nazwisko.addEventListener("change", function(e) {walid1(this); })
f.miasto.addEventListener("change", function(e) {walid2(this); })
f.pesel.addEventListener("change", function(e) {pesel(this); })
f.plec.addEventListener("change", function(e) {walid3(this); })
f.adres.addEventListener("change", function(e) {walid4(this); })

function walid0(i){
    if(i.value.length>3){
        i.style.backgroundColor= "green";
    }
    else{
        i.style.backgroundColor= "red";
    }
}

 function walid1(n){
    if(n.value.length>3){
        n.style.backgroundColor= "green";
    }
    else{
        n.style.backgroundColor= "red";
    }
}

 function walid2(m){
    if(m.value.length>=2){
        m.style.backgroundColor= "green";
    }
    else{
        m.style.backgroundColor= "red";
    }
}

  function pesel(p){
    if(p.value.length==11 && p.value/1){
      p.style.backgroundColor= "green";
    }
    else{
        p.style.backgroundColor= "red";
    }
  }

 function walid3(pl){
    if(pl.value>0){
        pl.style.backgroundColor= "green";
    }
    else{
        pl.style.backgroundColor= "red";
    }
}

 function walid4(a){
    if(a.value.length>=2){
        a.style.backgroundColor= "green";
    }
    else{
        a.style.backgroundColor= "red";
    }
}

function przycisk(x){
  x.style.backgroundColor= "green";
}


