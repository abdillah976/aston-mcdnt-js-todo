    // var tache = document.getElementById("inptTache").value;
    var liste = document.getElementById("liste");
    var index = 0;

    // Matérialise un element d'une liste
    function liTache() {
        var tache = document.getElementById("inptTache").value;
        if(tache != ""){
            var li = document.createElement('li');
            // Ajoute un id
            li.setAttribute("id","tache"+tache);
            li.innerText = tache;
            li.innerHTML += ' <button onclick="supprimeTache(this.parentNode);">Supprimer</button>';
            liste.appendChild(li);
            localStorage.setItem(index, tache);
            index +=1;
            limitStorage(index);
        }
    }

    // Ajout d'une tache à la liste
    function ajouterTache(){
        liTache();
    }

    // Supprime l'element passer en paramétre de la liste
    function supprimeTache(li) {
        li.parentNode.removeChild(li);
        // Supprime la data liée à la tache
        supprimeStorage(li);
    }

    // Recharge les données de la liste
    function loadData(){
        if(localStorage.length != 0){
            for(var i=0; i < localStorage.length; i++){
                var li = document.createElement('li');
                // Ajoute un id
                li.setAttribute("id",localStorage[i]);
                console.log(localStorage);
                li.innerText = localStorage.getItem(localStorage[i]);
                li.innerHTML += ' <button onclick="supprimeTache(this.parentNode);">Supprimer</button>';
                liste.appendChild(li);
            }
        }
    }
    // Supprime la storage passée en paramétre
    function supprimeStorage(li){
        if(li.getAttribute("id") == localStorage.getItem(li.getAttribute("id"))){
            localStorage.removeItem(li.getAttribute("id"));
        }
    }
    // Enrigistre le dernier index du localstorage
    function limitStorage(id) {
        localStorage.setItem("index",id);
    }