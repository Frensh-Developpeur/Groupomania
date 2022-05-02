<template>
   <div id="indexPage">
     <!-- Barre de navigation MODULABLE -->
<div id="nav-bar">

         <!-- Logo du site -->
     <h1>
          <a @click="loginEmpt" href="#"><img src="../assets/icon-left-font.png" alt="Logo du site"></a>
     </h1>
     <!-- Logo du site -->

      <!-- Partie Connexion Inscription NAV-BAR -->
       <ul v-if="this.verifSession < 1" class="nav-ul-login">
        
          <a v-if="this.verifSession < 1" @click="loginEmpt" class="nav-li" href="#"><li>{{ login }}</li></a> 
          <a v-if="this.verifSession < 1" @click="signupEmpt" class="nav-li" href="#"><li>{{ signup }}</li></a> 
          
          </ul>
         <!-- Partie Connexion Inscription NAV-BAR -->

           <!-- Partie FORUM NAV-BAR -->
          <ul v-if="this.verifSession >= 1"  class="nav-ul-forum">

              <a v-if="this.verifSession >= 1"  class="nav-li" href="#"><li>{{ forum }}</li></a>
              <a v-if="this.verifSession >= 1"  class="nav-li" href="#"><li>{{ publication }}</li></a>  
              <a v-if="this.verifSession >= 1"  class="nav-li" href="#"><li>{{ espaceUser }}</li></a> 
              <a v-if="this.verifSession >= 1" @click="userDisconnect" class="nav-li" href="#"><li>{{ deconnexion }}</li></a> 

          </ul>
           <!-- Partie FORUM NAV-BAR --> 

</div>
 <!-- Barre de navigation MODULABLE -->

       <!-- Login et inscription -->
         <loginPage  v-show="this.loginVerif === true" v-if="this.verifSession < 1"></loginPage>
         <signupPage v-show="this.signupVerif === true" v-if="this.verifSession < 1"></signupPage>
    <!-- Login et inscription -->

    <!-- Espace Utilisateur -->
    <espaceUser v-show="this.espaceUserVerif === true" v-if="this.verifSession >= 1"></espaceUser>
    <!-- Espace Utilisateur -->
         
   </div>

</template>

<script>

/* IMPORT DES DIFFÉRENTS MODULES */
import loginPage from '../components/Log/loginPage.vue'
import signupPage from '../components/Log/signupPage.vue'
import espaceUser from '../components/forum/espaceUser.vue'
/* IMPORT DES DIFFÉRENTS MODULES */


export default {
  name: 'principalPage',
  
  data() {
    return {
      /* DATA  */

      login: 'Connexion',
      signup: 'Inscription',
      forum: 'Forum',
      publication: 'Publication',
      espaceUser: 'Profil',
      deconnexion: 'Déconnexion',
      loginVerif: true,
      signupVerif: false,
      espaceUserVerif: true,
      verifSession: sessionStorage.length,

      /* DATA  */
    }
  },

  components:{
    /* Composants des différents modules */

    loginPage,
    signupPage,
    espaceUser

    /* Composants des différents modules */
  },

  methods:{

      /* Déconnecte l'utilisateur  */
    userDisconnect(){
      sessionStorage.clear();
      location.reload();
      window.location.assign(`http://localhost:8080/`)
    },
      /* Déconnecte l'utilisateur  */

      /* Permet à l'utilisateur de passer au module Inscription */
    signupEmpt(){
      if(this.loginVerif === true) {
       this.loginVerif = false;
       return this.signupVerif = true;
      } 
    },
      /* Permet à l'utilisateur de passer au module Inscription */

    /* Permet à l'utilisateur de passer au module Connexion */
    loginEmpt(){
      if(this.signupVerif === true) {
         this.signupVerif = false;
         return this.loginVerif = true;
      }    
    }
     /* Permet à l'utilisateur de passer au module Connexion */

  }
}
  
</script>

<style>

.nav-ul-login{
  width: 20%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.nav-ul-forum{
  width: 40%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.nav-li{
  font-family: 'Raleway', sans-serif;
  font-size: 1.2rem;
  color: black;
}

.nav-li:hover{
  border-bottom: 2px solid red;
}

#nav-bar{
  background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
img {
  text-align: center;
  width: 17%;
  height: 20%;
  border-radius: 50%;
}
</style>
