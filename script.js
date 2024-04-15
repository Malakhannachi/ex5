const msg = document.querySelector(".msg")
const taux = 6.55957
const convertisseur = document.getElementById("convertisseur")
console.log(convertisseur)

convertisseur.addEventListener("input",function(){
    var valeurConvertisseur = this.value
    if (!isNaN(valeurConvertisseur)) {
        msg.textContent = (valeurConvertisseur*taux).toFixed(2)
    }
    else {
        msg.textContent= " saisir une valeur numérique"
    }
})

