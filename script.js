window.addEventListener("load", myfetch);

const url = "https://jsonplaceholder.typicode.com/posts"
let output="";

// function myfetch(myurl){

//         fetch(myurl)
//         // console.log(myurl)
//         .then((res) => {
//             // console.log(res)

//             if(res.ok){
//             return res.json()
//             }else{
//                 throw new Error("Server is not responding")
//             }
//         })
//         .then(data =>{
//             // console.log(data)
            
//             for(i of data){
//                 output +=`
//                 <div class="newdiv">
//                 <ul>
//                 <li>
//                 ID : ${i.userId}
//                 </li>
//                 <li>Title: ${i.title} </li>
//                 <li>Body: ${i.body} </li>

//                 </ul>
//                   </div>  
//                 `
//             }
//             document.getElementById("currentdiv").innerHTML = output

//         })
//         .catch(err=>(err))
// }


// myfetch(url)


async function myfetch (myurl){
    try{
            const resFromUrl = await fetch(myurl)

            if(resFromUrl.ok){
                const data = await resFromUrl.json()
                    // console.log (data)
                for (i of data){


                    // console.log(i)
                    output +=`
                <div class="newdiv">
                <ul>
                <li>
                ID : ${i.userId}
                </li>
                <li>Title: ${i.title} </li>
                <li>Body: ${i.body} </li>

                </ul>
                  </div>  
                `
                }

            } else{
                throw new Error("Server is not responding")
            }
            document.getElementById("currentdiv").innerHTML=output
    }
    catch(error){
            console.log(error)
    }
}
myfetch(url)