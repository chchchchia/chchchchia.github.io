    var btn = document.getElementById('genBtn');
    btn.addEventListener('click', generate);

    function generate(){
    	var name = ["Cora", "Petra", "Núria", "Teresa Luna Desirée", "Eloísa", "Agatha", "Rebecca", "Carmen", "Emilia", "Elisa", "Úrsula", "Teia", "Tanit", "Queralt", "Vinyet", "Regla", "Georgina", "Leire", "Matilda", "Adela", "Sol", "Candela", "Hilda", "Leia", "Linda", "Aina", "Ares", "Gala", "Carla", "Calamanda", "Sofía", "Claudia", "Júlia", "Eva", "Luz", "Paula", "Victoria", "Ica", "Pilar", "Joana", "Elsa", "Dalia", "Helena", "Venancia", "Teodora (\"Teo\" for short)", "Selena", "Ofelia", "Aurora ", "Neus", "Agnes", "Alicia", "Arlet", "Clotilde", "Duna", "Elvira", "Emma", "Eulàlia", "Glòria", "Ivet", "Violant", "Elia", "Berta", "Marlene", "Chantal", "Paulina", "Chloe", "Lara", "Leah", "Thelma", "Zoe", "Adelina", "Amèlia", "Aurèlia", "Berenice", "Denise", "Cléa", "Harriett", "Tina", "Esclarmonde", "Marion", "Arlet", "Carmina", "Erin", "Mae", "Margot", "Tabitha", "Thaïs", "Vega", "Àgueda", "Ingrid"];
        var rand_idx = Math.floor(Math.random() * (name.length));
    	document.getElementById('result').innerHTML = "<h1>My baby's name is:</h1><div class='alert alert-success'><h2>"+name[rand_idx]+"</h2></div>";
        document.getElementById('genBtn').innerHTML = "Oh no! Anything but that! Generate another"
        
    }