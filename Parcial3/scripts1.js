function onLoadGaleria() {
    var value = localStorage.getItem('categorias');
    var album = document.getElementById("album");

    switch (value) {
        case 'AGENDAS':
            for (var i = 1; i < 9; i++) {

                var img1 = document.createElement("img");
                var div1 = document.createElement("div");
                var div2 = document.createElement("div");

                img1.src = "./multimedia/agendas/agen" + i + ".png"
                img1.style.width = "270px";

               
                btn.style.margin = "5px";

                album.appendChild(div1);
                div1.appendChild(img1);
                div1.appendChild(div2);
                //album.appendChild(img1);
            }
            break;
        case 'AUTOAYUDA':
            for (var i = 1; i < 9; i++) {

                var img1 = document.createElement("img");
                var div1 = document.createElement("div");
                var div2 = document.createElement("div");

                img1.src = "./multimedia/AutoAyuda/auto" + i + ".png"
                img1.style.width = "270px";

                


                div2.style.display = "center";

                btn.className = "btn btn-dark";
                btn.style.margin = "5px";

                album.appendChild(div1);
                div1.appendChild(img1);
                div1.appendChild(div2);

                //album.appendChild(img1);
            }
            break;

            case 'ARTE':
                for (var i = 1; i < 9; i++) {
    
                    var img1 = document.createElement("img");
                    var div1 = document.createElement("div");
                    var div2 = document.createElement("div");

    
                    img1.src = "./multimedia/arte/art" + i + ".png"
                    img1.style.width = "270px";
    
    
                    div2.style.display = "center";
    
                    btn.style.margin = "5px";
    
                    album.appendChild(div1);
                    div1.appendChild(img1);
                    div1.appendChild(div2);
                    //album.appendChild(img1);
                }
                break;

                case 'Cocina':
                    for (var i = 1; i < 9; i++) {
        
                        var img1 = document.createElement("img");
                        var div1 = document.createElement("div");
                        var div2 = document.createElement("div");
    
        
                        img1.src = "./multimedia/Cocina/cocin" + i + ".png"
                        img1.style.width = "270px";
        
        
                        div2.style.display = "center";
        
                        btn.style.margin = "5px";
        
                        album.appendChild(div1);
                        div1.appendChild(img1);
                        div1.appendChild(div2);
                        //album.appendChild(img1);
                    }
                    break;

                    case 'educacion':
                    for (var i = 1; i < 9; i++) {
        
                        var img1 = document.createElement("img");
                        var div1 = document.createElement("div");
                        var div2 = document.createElement("div");
    
        
                        img1.src = "./multimedia/educacion/educa" + i + ".png"
                        img1.style.width = "270px";
        
        
                        div2.style.display = "center";
        
                        btn.style.margin = "5px";
        
                        album.appendChild(div1);
                        div1.appendChild(img1);
                        div1.appendChild(div2);
                        //album.appendChild(img1);
                    }
                    break;

                    case 'Espiritualidad':
                    for (var i = 1; i < 9; i++) {
        
                        var img1 = document.createElement("img");
                        var div1 = document.createElement("div");
                        var div2 = document.createElement("div");
    
        
                        img1.src = "./multimedia/espiritualidad/espiri" + i + ".png"
                        img1.style.width = "270px";
        
        
                        div2.style.display = "center";
        
                        btn.style.margin = "5px";
        
                        album.appendChild(div1);
                        div1.appendChild(img1);
                        div1.appendChild(div2);
                        //album.appendChild(img1);
                    }
                    break;

                

            



        
          
    }



}

function abrirGaleria(strCategoria) {
    localStorage.setItem('categorias', strCategoria);
    window.location.href = 'galeria.html';
}