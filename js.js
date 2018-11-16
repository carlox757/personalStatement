var skills = ["JAVA", "JavaScript", "PHP", "HTML", "SQL", "CSS", "Teamwork", "Leadership", "Organised", "Multi-tasking"];
var skillList = "";

for(var i = 0;  i < skills.length; i++){
     
     skillList = '<li>' + skills[i] + '</li>';
    
        document.getElementById("left-skills").innerHTML += skillList;
    
}

