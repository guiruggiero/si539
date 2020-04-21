ch3form.addEventListener('submit', function(e) {
    var grade = 
    document.querySelectorAll('input[name="standing"]:checked')
    var year = document.querySelectorAll('input[name="gradDate"]:checked')

    console.log(grade);
    console.log(year);
    if (grade.length ==0 || year.length==0){
        console.log("here")
    
        if(grade.length ==0 && year.length==0){
            alert('You must select a class standing and graduation date!');
        }
        else if(grade.length==0){
            alert('You must a class standing');
        }
        else {
            alert('You must select a graduation date!');
        }
        e.preventDefault()
    }
});