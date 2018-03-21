    // var tache = document.getElementById("inptTache").value;
    var liste = document.getElementById("liste");
    var index = 1;
    var data = [];
    console.log(localStorage[1]);
    // Matérialise un element d'une liste
    function liTache() {
        var tache = document.getElementById("inptTache").value;
        if(tache != ""){
            var li = document.createElement('li');
            // Ajoute un id
            li.setAttribute("id",index);
            li.innerText = tache;
            li.innerHTML += ' <button onclick="supprimeTache(this.parentNode);">Supprimer</button>';
            liste.appendChild(li);
            //alert(data.length);
            if( data[data.length - 1] == null ){
                alert("++");
            }
            if(index >= data.length){
                if(index == data.length){
                    index += 1;
                }
                localStorage.setItem(index, tache);
                if(index == 0){
                    localStorage.setItem(index, tache);
                    index +=1;
                }else{
                    index +=1;
                }
                fixeLimitStorage(index);
            }else{
                // index = parseInt(localStorage.getItem("index"));
                index = data.length;
                // index +=1;
                localStorage.setItem(index, tache);
                fixeLimitStorage(index);
            }
            alert(index + " " + localStorage.getItem("index"));
        }
    }

    // Ajout d'une tache à la liste
    function ajouterTache(){
        liTache();
    }

    // Supprime l'element passer en paramétre de la liste
    function supprimeTache(li) {
        // Supprime la data liée à la tache
        supprimeStorage(li);
        li.parentNode.removeChild(li);
    }
    // Recharge les données de la liste
    function loadData(){
        // Récupere le dernier indice de la localStorage
        if(localStorage.getItem("index") != null){
            index = parseInt(localStorage.getItem("index"));
        }else{
            index = 1;
            localStorage.setItem("index", index);
        }
        if(localStorage.length != 0){
            // Récupére tous les items du data storage
            for(var i=1; i < localStorage.length; i++) {
                // If id exist id++
                if (localStorage.getItem(i) != null){
                    data.push(localStorage.getItem(i));
                }
                // console.log(data[i]);
            }
            for(var j=0; j < data.length; j++) {
                if(data[j] != null) {
                    var li = document.createElement('li');
                    // Ajoute un id
                    li.setAttribute("id", j);
                    li.innerText = data[j];
                    li.innerHTML += ' <button onclick="supprimeTache(this.parentNode);">Supprimer</button>';
                    liste.appendChild(li);
                }
            }
        }
        alert(data.length);
        return data;
    }
    // Supprime la storage passée en paramétre
    function supprimeStorage(li){
        localStorage.removeItem(li.getAttribute("id"));
        if(index > 0 ) {
            // MAJ de l'index
            index -= 1;
            fixeLimitStorage(index);
        }
    }
    // Enrigistre le dernier index du localstorage
    function fixeLimitStorage(id) {
        localStorage.setItem("index",id);
    }
    // fonction test
    function loadData1(){
        var i =0;
        var test = true;
        var data = [];
        for(var j=1; j < localStorage.length;j++){
            while(test){
                if(localStorage[i] != null){
                    data.push(localStorage[i]);
                    test = false;
                }else{
                    data.push(localStorage[i]);
                }
                i++;
            }
        }
        return data;
    }