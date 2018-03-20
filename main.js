    // var tache = document.getElementById("inptTache").value;
    var liste = document.getElementById("liste");

    // Matérialise un element d'une liste
    function liTache() {
        var tache = document.getElementById("inptTache").value;
        if(tache != ""){
            var li = document.createElement('li');
            li.innerText = document.getElementById("inptTache").value;
            li.innerHTML += ' <button onclick="supprimeTache(this.parentNode);">Supprimer</button>';
            liste.appendChild(li);
            localStorage.setItem("tache."+tache, tache);
        }
    }

    // Ajout d'une tache à la liste
    function ajouterTache(){
        liTache();
    }

    // Supprime l'element passer en paramétre de la liste
    function supprimeTache(li) {
        li.parentNode.removeChild(li);
        
    }

    // Recharge les données de la liste
    function loadData(){
        for(var i=0; i < localStorage.length; i++){

        }
    }