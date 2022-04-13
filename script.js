window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function $(elem) {
    return document.querySelector(elem);
}

function Class(elem) {
    return document.getElementsByClassName(elem);
}

const kepTomb= ["kepek/kep13.jpg","kepek/kep14.jpg","kepek/kep15.jpg","kepek/kep16.jpg","kepek/kep17.jpg","kepek/kep13.jpg","kepek/kep14.jpg","kepek/kep15.jpg","kepek/kep16.jpg","kepek/kep17.jpg"]
const hatter ="kepek/hatter.jpg";
function init() {
    let szoveg = "";
    kepTomb.forEach(function(elem,index){
        szoveg += `<div><img id ="${index}" src="${hatter}" alt="szorny"></div>`;
    });
    
    $("article").innerHTML = szoveg;

    const kepElemTomb = document.querySelectorAll("article div img");

    kepElemTomb.forEach(function(elem){
        elem.addEventListener("click", megfordít);
    });
}

const kivalasztottTomb = [];
function megfordít() {
    const hatter ="kepek/hatter.jpg";
    console.log(event.target.id);
    let aktualisElem =event.target.id;
    event.target.src=kepTomb[aktualisElem];
    kivalasztottTomb.push(aktualisElem);
    console.log(kivalasztottTomb);

    if (kivalasztottTomb.length===2) {
        let feltetel = kepTomb[kivalasztottTomb[0]]===kepTomb[kivalasztottTomb]
        console.log(feltetel);
        if (!feltetel) {
            setTimeout(function(){
                kivalasztottTomb.forEach(function(elem){
                    ID(elem).src=hatter;
                });
                kivalasztottTomb.splice(0);
            },1000);
        } else {
            kivalasztottTomb.forEach(function(elem){
                ID(elem).style.display="none";
            });
            kivalasztottTomb.splice(0);
        }
    } 
}
