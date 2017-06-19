 //Modele de donnee
 let liste = [];
 let couleur = [];
 let ul = document.createElement('ul');
 document.body.appendChild(ul);
 let form = document.querySelector("form");

 function ajout(element, element1) {
     liste.push(element);
     couleur.push(element1)
 }

 function supp(element) {
     liste.splice(element, 1);
 }

 //affichage


 function afficherListe() {
     ul.textContent = "";
     for (let i = 0; i < liste.length; i++) {


         if (couleur[i] === "peuurgent") {
             let li = document.createElement("li");
             li.className = "peuurgent";
             li.innerHTML = "<span class='title'>" + liste[i] + "</span>";
             ul.appendChild(li);

         }

         if (couleur[i] === "urgent") {
             let li = document.createElement("li");
             li.className = "urgent";
             li.innerHTML = "<span class='title'>" + liste[i] + "</span>";
             ul.appendChild(li);

         }

         if (couleur[i] === "tresurgent") {
             let li = document.createElement("li");
             li.className = "tresurgent";
             li.innerHTML = "<span class='title'>" + liste[i] + "</span>";
             ul.appendChild(li);
         }

         let button = document.createElement("button");
         button.textContent = "X";
         ul.appendChild(button);
         button.addEventListener("click", function() {
             supp(i);
             afficherListe();

         })

     }

 }


 form.addEventListener("submit", function(e) {
         let comment = document.querySelector("#comment").value;
         let valuecol = document.querySelector("input[type=radio]:checked").value;
         console.log(valuecol);
         ajout(comment, valuecol);
         afficherListe();
         console.log(couleur);
         e.preventDefault();
     }

 );