f = document.getElementById("form");
w = document.getElementById("wypluwacz");
t = document.getElementById("tabela");
b = "<br>";

f.name.addEventListener("change", function(e) { walid(this); });
f.dob.addEventListener("change", function(e) { data(this); pesel(this) });
f.surname.addEventListener("change", function(e) { walid(this); });



function data(d) {
    dzis = new Date();
    datka = new Date(d.value);
    ileMineloDni = Math.floor((dzis - datka) / (1000*60*60*24));
    ileMineloMiesiecy = Math.floor(ileMineloDni/30.44);
    ileMineloLat = Math.floor(ileMineloMiesiecy/12);
   // tabela(d,ileMineloMiesiecy);
}

function pesel(d){
    k = d.value;
    ck = Array(1,3,7,9,1,3,7,9,1,3);
    sk =0;
    skb = 0;
    peselo = k[2]+k[3]+k[5]+k[6]+k[8]+k[9];
    peselo +=Math.floor(Math.random()*1000)+1000 ;
    for(i=0;i< ck.length;i++){
        sk = ck[i] * (peselo[i]*1);

        if(sk >10) {  sk = sk%10; } 
        skb +=  sk;
     }
    
     peselo +=10 -skb%10;
     tabela(d,peselo);
}

function tabela(d,z){
    wiersz= t.insertRow(-1);
    w1 = wiersz.insertCell(0);
    w1.innerHTML = d.name;
    w2 = wiersz.insertCell(1);
    w2.innerHTML = d.value;
    w3= wiersz.insertCell(2);
    w3.innerHTML = z;
}

function walid(v) {
    if(v.value.length >3) {
 w.innerHTML += v.name + ":";
 w.innerHTML += v.value +b;
 v.style.color="#fff";
 v.style.backgroundColor= "blue";
    } else {
        v.style.color="#fff";
        v.style.backgroundColor= "red";
    }
} 
