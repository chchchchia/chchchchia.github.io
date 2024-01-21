    var btn = document.getElementById('genBtn');
    btn.addEventListener('click', generate);

    function generate(){
    	var name = ["Carolina", "Elisa", "Georgina", "Claudia", "Julia", "Eva", "Aurora", "Alicia", "Denise", "Marion", "Margot", "Diana", "Octavia", "Simone", "Penelope"];
        var rand_idx = Math.floor(Math.random() * (name.length));
    	document.getElementById('result').innerHTML = "<h2>My baby's name is:</h2><div class='alert alert-success mb-0'><h1>"+name[rand_idx]+"</h1></div><div><h1>Usage Examples:</h1><h3>"+name[rand_idx]+" put that down!</h3><h3>Please, "+name[rand_idx]+", just go to sleep.</h3><h3>"+name[rand_idx]+" ate all the cookies. Again.</h3><h3>"+name[rand_idx]+", please stop chewing on your feet.</h3></div>";
        document.getElementById('genBtn').innerHTML = "Oh no! Anything but that! Generate another"
    }
