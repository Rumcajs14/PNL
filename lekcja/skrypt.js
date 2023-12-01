f = document.getElementById("form");
w = document.getElementById("wypluwacz");
// konfiguracja 
const ok = "blue";
const error  = "red";
const color = "#fff";

b = "<br>";
rexN =  /^[0-9]+$/;
rexT =  /^[a-zA-Z]+$/;
rexD =  /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
w.innerHTML+= b;

f.send.disabled = true;
f.name.addEventListener("change", function (e) {  w.innerHTML+= this.name +": "+validate(this,3)+b; });
f.surname.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,3)+b; });
f.dob.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,0,"D")+b; });
f.children.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,0,"N")+b; });
f.shoe_size.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,0,"N")+b; });
f.level.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,0,"N")+b; });


function validate(v,n,type="T") {

    if(v.value.length > n ) {
        // typ tekst  
        if(type == "T" && rexT.test(v.value)) {
            v.style.color=color; 
            v.style.backgroundColor=ok;
            f.send.disabled = false;
            return v.value;
        } else {
            v.style.color=color; 
            v.style.backgroundColor=error;
            f.send.disabled = true;
        }
        // typ liczba
        if(type == "N" && rexN.test(v.value)) {
            v.style.color=color;
            v.style.backgroundColor=ok;
            f.send.disabled = false;
            return v.value*1;
        } else {
            v.style.color=color; 
            v.style.backgroundColor=error;
            f.send.disabled = true;
        }
        // typ data 
        if(type == "D" && rexD.test(v.value)) {
            v.style.color=color; 
            v.style.backgroundColor=ok;
            f.send.disabled = false;
            return v.value;
        } else {
            v.style.color=color; 
            v.style.backgroundColor=error;
            f.send.disabled = true;
        }    
    }       
}
