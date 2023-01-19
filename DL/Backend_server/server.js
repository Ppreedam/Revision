// var promise = new Promise(function(resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "geeksforgeeks"
//     if(x === y) {
//         resolve();
//     } else {
//         reject();
//     }
//     });
        
//     promise.
//         then(function () {
//             console.log('Success, You are a GEEK');
//         }).
//         catch(function () {
//             console.log('Some error has occurred');
//         });


        function change() {
            return new Promise(function(resolve, reject) {
      
                // Setting 2000 ms time
                setTimeout(resolve, 2000);


            }).then(function() {
                console.log("Wrapped setTimeout after 2000ms");
            });
        }
    