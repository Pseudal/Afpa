function main(){
class Compte{
    constructor(n,s){
        this.numero = n;
        this.solde = s;
    }
    affichage(){
        return "Numero: " + this.numero + " Solde: " + this.solde;
    }

    retrait(montant){
        this.solde -= montant;
        return this.solde;
    }

    versement(montant){
        this.solde += montant 
        return this.solde;
        }
    }

var c1 = new Compte();//
c1.numero = 001;
c1.solde = 500;
console.log(c1.affichage());

var c2 = new Compte();
c2.numero = 002;
c2.solde = 250;
console.log(c2.affichage());

var a = 150; //prompt("combien voulez vous virer ?")
if (a > c2.solde){
    console.log("erreur, pas assez d'argent");
    return;
}
c1.retrait(a)
c2.versement(a)

console.log(c1.affichage());
console.log(c2.affichage());

}

main();