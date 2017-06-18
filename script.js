 //Modele de donnee
 let liste = [];
 let ul = document.createElement('ul');
 document.body.appendChild(ul);
 let form = document.querySelector("form");

 function ajout(element) {
     liste.push(element);
 }

 function supp(element) {
     liste.splice(element, 1);
 }

 //affichage


 function afficherListe() {
     ul.textContent = "";
     for (let i = 0; i < liste.length; i++) {


         if (form.urgence[0].checked == true) {
             let li = document.createElement("li");
             li.className = "peuurgent";
             li.innerHTML = "<span class='title'>" + liste[i] + "</span>";
             li.style.background = 'url(hip-square.png)';
             li.style.background.size = "cover";
             li.style.width = "400px";
             li.style.height = "400px";
             ul.appendChild(li);
         }

         if (form.urgence[1].checked == true) {
             let li = document.createElement("li");
             li.className = "urgent";
             li.innerHTML = "<span class='title'>" + liste[i] + "</span>";
             li.style.background = 'url(vert.png)';
             li.style.background.size = "cover";
             li.style.width = "400px";
             li.style.height = "400px";
             ul.appendChild(li);
         }

         if (form.urgence[2].checked == true) {
             let li = document.createElement("li");
             li.className = "trèsurgent";
             li.innerHTML = "<span class='title'>" + liste[i] + "</span>";
             li.style.background = 'url(jaune.png)';
             li.style.background.size = "cover";
             li.style.width = "400px";
             li.style.height = "400px";
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
         ajout(comment + " ");
         afficherListe();
         e.preventDefault();
     }

 );