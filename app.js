

//Asynchronous JS & API's



//i want random code when click on btn




async function fetchQuotes(){


    let response=await fetch('https://randomuser.me/api/');//this line executed

    let data=await response.json();//

    let user=data.results[0];

    let fullName=user.name.title+" "+user.name.first+" "+user.name.last;

    let location=user.location.city+','+user.location.state+" ,"+user.location.country;

    let imageUrl=user.picture.large;
    let age=user.dob.age



    // let random=Math.floor(Math.random()*quotes.length);
    // let quote=quotes[random]
    // console.log(data)
    // console.log(quote)

    
    document.getElementById('user-pic').src=imageUrl;

    document.getElementById('quote').innerText='"'+location+'"';
    document.getElementById('author').innerText="Name : "+fullName;

    document.getElementById('age').innerText="age : "+age;

}

window.onload=function(){

    fetchQuotes();


}

