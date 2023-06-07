                                    /* Running in browser*/


        let gender = prompt("Enter your gender");
        let cost = prompt("Enter your dress cost");
        cost = parseInt(cost);        
        

        if (gender === "men") {
          cost = cost - (cost * 0.05);
          alert(`cost of men's dress with 5% discount is ${cost}`);        

        //   console.log(`cost of men's dress with 5% discount is ${cost}`);
        } else if (gender === "women") {
          cost = cost - (cost * 0.10);
          alert(`cost of women's dress with 10% discount is ${cost}`);        

        //   console.log(`cost of women's dress with 10% discount is ${cost}`);
        } else if (gender === "kids") {
          cost = cost - (cost * 0.15);
          alert(`cost of kids dress with 15% discount is ${cost}`);        

        //   console.log(`cost of kids dress with 15% discount is ${cost}`);
        } else {
            alert("please enter your gender correctly (men/women/kids)");
            // console.log("please enter your gender correctly (men/women/kids)");
            
        }
  


                                    /*  Running in node*/
        
        // const readline = require('readline');
        
        // const rl = readline.createInterface({
        //   input: process.stdin,
        //   output: process.stdout
        // });
        
        // rl.question("Enter your gender: ", (gender) => {
        //   rl.question("Enter your dress cost: ", (cost) => {
        //     cost = parseFloat(cost);
        
        //     if (gender === "men") {
        //       cost = cost - (cost * 0.05);
        //      console.log(`cost of men's dress with 5% discount is ${cost}`);
        //     } else if (gender === "women") {
        //       cost = cost - (cost * 0.10);
        //       console.log(`cost of women's dress with 10% discount is ${cost}`);
        //     } else if (gender === "kids") {
        //       cost = cost - (cost * 0.15);
        //        console.log(`cost of kids dress with 15% discount is ${cost}`);
        //     } else {
        
        //       console.log("please enter your gender correctly (men/women/kids)");
        //     }
        
        //     rl.close();
        //   });
        // });
        