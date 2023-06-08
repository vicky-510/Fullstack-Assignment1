   
                // Course Program

        confirm("Welcome to our Website. Would you like to know more about our course details");        

        let course = prompt("Please enter one of the listed course like (fullstack / java / python/ ccna) ");        

        let fees1 =10000, fees2 = 9000, fees3 = 8000, fees4 =9000;


        switch(course){
          
            case "fullstack":
                alert(`Full stack course is ${fees1}`);
                break;
            case "java":
                alert(`Java course is ${fees2}`);
                break;
            case "python":
                alert(`python course is ${fees3}`);
                break;
            case "ccna":
                alert(`CCNA course is ${fees4}`);
                break;
            default:
                alert("Please enter course name correctly");
                break;
        }
           
        