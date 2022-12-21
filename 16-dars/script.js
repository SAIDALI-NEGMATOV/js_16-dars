let form = document.querySelector("#form")
let name=  document.querySelector("#name")
let SureName=  document.querySelector("#surename")
let age=  document.querySelector("#age")
let email=  document.querySelector("#email")
let password=  document.querySelector("#password")
let link =  document.querySelector("#link")

// console.log(form);


// form.onsubmit = (event) => {
//     event.preventDefault()
//     console.log(event);
// }


var user , serAge , UserSurname , userEmail , UserPassword ;


    form.onchange = (event) => {
    
        user = event.target.value;
    }
    name.onchange = (event) => {
    
      user = event.target.value;
    }
    surename.onchange = (event) => {
    
     user = event.target.value;
    }
    age.onchange = (event) => {
    
       user = event.target.value;
    }
    email.onchange = (event) => {
    
       user = event.target.value;
    }
    password.onchange = (event) => {
    
       user = event.target.value;
    }


link.onclick = () => {
    link.setAttribute("href" , "log.html")
    console.log(user , serAge , UserSurname , userEmail , UserPassword);

}
