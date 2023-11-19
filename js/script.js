    var btn = document.getElementById('genBtn');
    btn.addEventListener('click', generate);

    function generate(){
    	var name = ["Cecilia", "Carolina", "Natalie", "Michelle", "Petra", "Teresa Luna Desirée", "Agatha", "Rebecca", "Carmen", "Emilia", "Elisa", "Úrsula", "Teia", "Georgina", "Matilda", "Carla", "Claudia", "Júlia", "Eva", "Victoria", "Joana", "Dalia", "Aurora", "Alicia", "Emma", "Glòria", "Paulina", "Lara", "Adelina", "Amèlia", "Denise", "Marion", "Carmina", "Erin", "Margot", "Adriana", "Angelina", "Aurora", "Carlotta", "Cecilia", "Delia", "Diana", "Dolores", "Elisa", "Emilia", "Erika", "Imelda", "Isabel", "Juliana", "Lucia", "Maria", "Nadia", "Natalia", "Nena", "Octavia", "Rita", "Rosa", "Rosita", "Sally", "Sara", "Simone", "Virginia"];
        var rand_idx = Math.floor(Math.random() * (name.length));
    	document.getElementById('result').innerHTML = "<h1>Her name is:</h1><div class='alert alert-success'><h2>"+name[rand_idx]+"</h2></div>";
    }
