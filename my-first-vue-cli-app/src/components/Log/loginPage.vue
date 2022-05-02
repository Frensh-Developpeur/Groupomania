<template>
<div id="table-column">
   <div class="mb-3">
 
     <label for="email-login" id="fontText" class="form-label">{{mail}}</label>

     <div class="icoDiv">
     <input type="email" class="template-login-signup" id="email-login" @keyup="onEnter" placeholder="Groupomania@example.com">
     <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="test7" v-show="regexpBoolMail === false" />
     <font-awesome-icon icon="fa-solid fa-check" class="test8" v-show="regexpBoolMail === true" />
     </div>

     <label for="password-login" id="fontText" class="form-label">{{password}}</label>

     <div class="icoDiv">
         <input type="password" class="template-login-signup" @keyup="onEnter" id="password-login"   placeholder="Groupomania">
         <font-awesome-icon @click="affichMsgConf" icon="fa-solid fa-eye-low-vision" class="test8" />
         <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="test11" v-show="regexpBoolPassword === false" />
         <font-awesome-icon icon="fa-solid fa-check" class="test10" v-show="regexpBoolPassword === true" />
     </div>
     <input @click="checkLogin" class="button-loginSignup" id="buttonLoginSignup" type="submit" value="Confirmer">

   </div>

</div>
</template>

<script>
export default {
   name:'loginPage',
data(){
    return{
   mail: 'Adresse email',
   password:'Mot de passe',
   affichMdp: 'Aperçu du mot de passe',
   messageMdp: '',
   numberAffichMsg: true,

   regexpBoolMail: null,
   regexpBoolPassword: null,
   
   passwordRegExp : new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})`),
   emailRegExp : new RegExp (/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/i),

   connexionUser : false
    }
},
 methods: {
    affichMsgConf(){
        if(this.numberAffichMsg === false){
            this.numberAffichMsg = true;
             document.getElementById('password-login').setAttribute("type","password");
        } else {
            this.numberAffichMsg = false;
            document.getElementById('password-login').setAttribute("type","text");
        }
    },

     onEnter(){
        let  mailLogin = document.getElementById('email-login');
        let  passwordLogin = document.getElementById('password-login');
        if(this.emailRegExp.test(mailLogin.value.trim()) ? this.regexpBoolMail = true : this.regexpBoolMail = false);
        if(this.passwordRegExp.test(passwordLogin.value.trim()) ? this.regexpBoolPassword = true : this.regexpBoolPassword = false);
     },

    checkLogin(){
      
      let loginCheck = {
          Email: document.querySelector('#email-login').value,
          Password : document.querySelector('#password-login').value 
      };
     fetch('http://localhost:3000/api/auth/login',{
       method: "POST", 
       headers:{  'Accept': 'application/json',
                  'Content-type': 'application/json'
     },
     body: JSON.stringify(loginCheck)
      })
     
      .then(res => res.json())
      .then(login => {
        if(login.userId === undefined){
            document.querySelector('.mb-3').innerHTML += `<p class= "errorMsg">Adresse mail ou mot de passe incorrect !</p>`
            console.log('pff ta pas le bon mdp')
            setTimeout(() => {
               location.reload();
                 }, 2000)
        } else {
          console.log('good');
          sessionStorage.setItem('user', JSON.stringify(login));
          window.location.assign(`http://localhost:8080/?id=`+ login.userId)
        }
      })
  
    }
}
}
</script>

<style>
#fontText{
    margin-top: 3%;
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
}
#buttonLoginSignup, #buttonLoginSignup2 {
    margin-top: 5%;
    border: 2px solid white;
    border-radius: 15px / 20px;
    background-color: #ffffff;
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
    padding: 1% 5%;
    cursor: grab;
}
#table-column{
   width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10%;
    margin-bottom: 50px;
}
.errorMsg{
   
    color: red;
     font-family: 'Raleway', sans-serif;
     margin-top: 15px;
     font-size: 1.5Rem;

}
.mb-3{
    color: white;
    padding-top: 5%;
    width: 50%;
    padding-bottom: 5%;
    
    
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: 800%;
    background-image: url('../../assets/background-login.webp');
}
.template-login-signup {
    width: 50%;
    margin-top: 15px;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
    
}
.errorColor{
    margin-top: 2%;
    color: red;
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
    cursor: grab;
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
.test13{
    width: 30px;
    height: 26px;
    color: red;
    position: absolute;
    top: 38%;
    right: 35%;
}
.test12{
    width: 25px;
    height: 26px;
    color: green;
    position: absolute;
    top: 38%;
    right: 35%;
}
</style>