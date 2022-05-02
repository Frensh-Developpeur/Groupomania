<template>
<div id="table-column">
   <div class="mb-3">
       <!-- Gestion  -->
   
     <label for="nom-signup" id="fontText" class="form-label">{{name}}</label>

<div class="icoDiv">
     <input type="text" class="template-login-signup" id="nom-signup" v-on:keyup="onEnter"  placeholder="Ramtohul">  

     <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="test7" v-show="regexpBoolName === false" />
     <font-awesome-icon icon="fa-solid fa-check" class="test8" v-show="regexpBoolName === true" />
</div>

     <label for="prenom-signup" id="fontText" class="form-label">{{firstName}}</label>

<div class="icoDiv">
     <input type="text" class="template-login-signup" v-on:keyup="onEnter" id="prenom-signup" placeholder="Ashley">

     <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="test7" v-show="regexpBoolFirstName === false" />
     <font-awesome-icon icon="fa-solid fa-check" class="test8" v-show="regexpBoolFirstName === true" />
</div>

     <label for="email-signup" id="fontText" class="form-label">{{mail}}</label>


<div class="icoDiv">
     <input type="email" class="template-login-signup" v-on:keyup="onEnter" id="email-signup" placeholder="Groupomania@example.com">
     <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="test7" v-show="regexpBoolMail === false" />
     <font-awesome-icon icon="fa-solid fa-check" class="test8" v-show="regexpBoolMail === true" />
</div>
   
     <label for="password-signup" id="fontText" class="form-label">{{password}}</label>
     
     <div class="icoDiv">
         <input type="password" class="template-login-signup" v-on:keyup="onEnter" id="password-signup"   placeholder="Groupomania">
         <font-awesome-icon @click="affichMsgConf" icon="fa-solid fa-eye-low-vision" class="test8 test9" />
         <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="test11" v-show="regexpBoolPassword === false" />
         <font-awesome-icon icon="fa-solid fa-check" class="test10" v-show="regexpBoolPassword === true" />
     </div>

     <label for="date-signup" id="fontText"  class="form-label">{{birthday}}</label>

   <div class="icoDiv">
     <input type="date" class="template-login-signup" v-on:keyup="onEnter" id="date-signup" min="1950-01-01" max="2015-01-01"  required >
     <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="test11" v-show="regexpBoolBirthday === false" />
     <font-awesome-icon icon="fa-solid fa-check" class="test10" v-show="regexpBoolBirthday === true" />
  </div>

     <label for="ville-signup" id="fontText" class="form-label">{{city}}</label>

<div class="icoDiv">
     <input type="text" class="template-login-signup" v-on:keyup="onEnter" id="ville-signup" placeholder="Dijon">
     <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="test7" v-show="regexpBoolCity === false" />
     <font-awesome-icon icon="fa-solid fa-check" class="test8" v-show="regexpBoolCity === true" />
</div>

<label for="adresse-signup" id="fontText" class="form-label">{{adress}}</label>

<div class="icoDiv">
     <input type="text" class="template-login-signup" id="adresse-signup"  v-on:keyup="onEnter" placeholder="32 rue de Dijon">
     <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="test7" v-show="regexpBoolAdress === false" />
     <font-awesome-icon icon="fa-solid fa-check" class="test8" v-show="regexpBoolAdress === true" />
</div>
     

     <input @click="checkLogin" class="button-loginSignup" id="buttonLoginSignup2" type="button" value="Inscription">

   </div>
</div>
</template>
  <script src="https://kit.fontawesome.com/2334703c75.js" crossorigin="anonymous"></script>
<script>
export default {
   name:'signupPage',
   data() {
    return {
        name :'Nom',
        firstName:'Prénom',
        mail:'Adresse mail',
        password:'Mot de passe',
        birthday: 'Date de naissance',
        city:'Ville',
        adress: 'Adresse',
        affichMdp: 'Aperçu du mot de passe',
        messageMdp: '',
        boolAffichMsg: false,
        regexpBoolName: null, 
        regexpBoolFirstName: null,
        regexpBoolAdress: null,
        regexpBoolCity: null,
        regexpBoolMail: null,
        regexpBoolPassword: null,
        regexpBoolBirthday: null,
        
        firstNameRegExp : new RegExp(`^[a-zA-Zàâäéèêëïîôöùûüç° -]{1,}$`),
        passwordRegExp : new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})`),
        lastNameRegExp : new RegExp(`^[a-zA-Zàâäéèêëïîôöùûüç° -]{1,}$`),
        regexAddress : new RegExp(/^[a-zA-Z0-9 ]+$/),
        cityRegExp : new RegExp(`^[a-zA-Zàâäéèêëïîôöùûüç° -]{1,}$`),
        emailRegExp : new RegExp (/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/i),
        dateBirthdayRegExp: new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/)
    }
},methods: {
    onEnter(){
        let  nameSignup = document.getElementById('nom-signup');
        let  firstNameSignup = document.getElementById('prenom-signup');
        let  adressSignup = document.getElementById('adresse-signup');
        let  citySignup = document.getElementById('ville-signup');
        let  mailSignup = document.getElementById('email-signup');
        let  passwordSignup = document.getElementById('password-signup');
        let  dateSignup = document.getElementById('date-signup');

        this.regexpBoolName = (this.lastNameRegExp.test(nameSignup.value.trim()) ? true : false);


        if(this.lastNameRegExp.test(nameSignup.value.trim()) ? this.regexpBoolName = true : this.regexpBoolName = false);
        if(this.firstNameRegExp.test(firstNameSignup.value.trim()) ? this.regexpBoolFirstName = true : this.regexpBoolFirstName = false);
        if(this.regexAddress.test(adressSignup.value.trim()) ? this.regexpBoolAdress = true : this.regexpBoolAdress = false);
        if(this.cityRegExp.test(citySignup.value.trim()) ? this.regexpBoolCity = true : this.regexpBoolCity = false);
        if(this.emailRegExp.test(mailSignup.value.trim()) ? this.regexpBoolMail = true : this.regexpBoolMail = false);
        if(this.passwordRegExp.test(passwordSignup.value.trim()) ? this.regexpBoolPassword = true : this.regexpBoolPassword = false);
        if(this.dateBirthdayRegExp.test(dateSignup.value.trim()) ? this.regexpBoolBirthday = true : this.regexpBoolBirthday = false);
    },

    affichMsgConf(){
        if(this.numberAffichMsg === false){
            this.numberAffichMsg = true;
             document.getElementById('password-signup').setAttribute("type","password");
        } else {
            this.numberAffichMsg = false;
            document.getElementById('password-signup').setAttribute("type","text");
        }
    },

    checkLogin(){

      let signupCheck = {
          Name :document.querySelector('#nom-signup').value,
          FirstName :document.querySelector('#prenom-signup').value,
          Email: document.querySelector('#email-signup').value,
          Password : document.querySelector('#password-signup').value,
          Birthday : document.querySelector('#date-signup').value,
          City : document.querySelector('#ville-signup').value,
          Adress : document.querySelector('#adresse-signup').value 
      };

      fetch('http://localhost:3000/api/auth/signup',{
       method: "POST", 
       headers:{  'Accept': 'application/json',
                  'Content-type': 'application/json'
     },
     body: JSON.stringify(signupCheck)
      })
      .then(location.reload())   
       .catch(function () {
         document.querySelector(".mb-3").innerHTML += `<p class="errorColor">Erreur serveur indisponible, veuillez réessayer plus tard !</p>`
           setTimeout(() =>{
             document.querySelector('.errorColor').innerHTML = ``;
             location.reload();
           }, 1500)
          
         });
    }
}
}
</script>

<style>
.icoDiv {
   color: white;
    width: 100%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    
}
.affichMdp{
    margin-top: 15px;
    padding: 5px;
    color: black;
    height: 16px;
    background: white;
    width: 49.5%;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
}
.test8{
    width: 25px;
    height: 26px;
    color: green;
    position: absolute;
    top: 38%;
    right: 25%;
}
.test9{
cursor: grab;
}
.test7{
     width: 30px;
    height: 26px;
    color: red;
    position: absolute;
    top: 38%;
    right: 25%;
}
.test11{
       width: 30px;
    height: 26px;
    color: red;
    position: absolute;
    top: 38%;
    right: 29%;
}
.test10{
     width: 25px;
    height: 26px;
    color: green;
    position: absolute;
    top: 38%;
    right: 29%;
}
</style>