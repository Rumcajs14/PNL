const url1 = "https://imiki.pl/dane.json";
const url2 = "https://imiki.pl/dane1.json";
w = document.getElementById("wypluwacz");

fetch(url1)
  .then(response => {return response.text();
  })
  .then(fileContent => {
  dane(JSON.parse(fileContent));
  
})
.catch(error => {
  console.error('błąd json:',error);
});

fetch(url2)
  .then(response => {return response.text();
  })
  .then(fileContent => {
  dane1(JSON.parse(fileContent));
  
})
.catch(error => {
  console.error('błąd json:',error);
});

function dane(d){
  if(typeof(d.p0.punkty) == "number"){
    a = d.p1.punkty;
  }else {
    a = Array(d.p0.punkty.p0 , d.p0.punkty.p1);
  }
  console.log(a);
}

function dane1(x){
  if(typeof(x.p1.punkty) == "number"){
    b = 
  }
}

