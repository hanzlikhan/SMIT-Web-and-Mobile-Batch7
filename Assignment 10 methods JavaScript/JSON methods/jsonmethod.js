var str = '{"name":[' + '{"first" : "Muhammad","LastN":"hanzla" },'+
                        '{"first" : "Irfan","LastN":"Malik" },'+
                        '{"first" : "Ali","LastN":"Raza" }]}';
        
            var myObj = JSON.parse(str);
            console.log(myObj);

            // JSON.strigify method 

            var myJson = JSON.stringify(myObj)
            console.log(myJson);
            

            localStorage.setItem("testJSON", myJson);
            const retrievedJson = localStorage.getItem("testJSON");
            console.log(retrievedJson);


            