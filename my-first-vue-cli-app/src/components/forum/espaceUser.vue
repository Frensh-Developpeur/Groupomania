<template>
    <div id="table-column">
        <div v-show="modifUser === false" class="mb-3 page2">  
          <img class="imgUser"  src="../../assets/test4.jpeg" alt="image de profil">
          <h1 class="nameUser" >{{user.FirstName}} {{user.Name}}</h1>
          <p class="paramsUser">Adresse mail : {{user.Email}}</p>
          <p class="paramsUser">Date de naissance : {{user.Birthday}}</p>
          <p class="paramsUser">Ville : {{user.City}}</p>
          <p class="paramsUser">Adresse: {{user.Adress}}</p>
          <div v-show="modifUser === false" class="buttonUser">
              <button @click="updateUser" class="modifButtonUser">Modifier</button>
              <button @click="suppUser" class="suppButtonUser">Supprimer mon compte</button>
          </div>
          </div>
           <div v-show="modifUser === true" class="mb-3 page2"> 
                    
        <label for="Name-modifUser" id="fontText" class="form-label">Nom</label>

        <div class="icoDiv">
         <input type="text" class="template-login-signup" id="Nom-modifUser"  placeholder="Ramtohul">  
        </div>

        <label for="FirstName-modifUser" id="fontText" class="form-label">Prénom</label>

        <div class="icoDiv">
         <input type="text" class="template-login-signup" id="FirstName-modifUser"  placeholder="Franck">  
        </div>
          <h1 class="nameUser" >{{user.FirstName}} {{user.Name}}</h1>
          <p class="paramsUser">Adresse mail : {{user.Email}}</p>
          <p class="paramsUser">Date de naissance : {{user.Birthday}}</p>
          <p class="paramsUser">Ville : {{user.City}}</p>
          <p class="paramsUser">Adresse: {{user.Adress}}</p>
          <div v-show="modifUser === false" class="buttonUser">
              <button @click="updateUser" class="modifButtonUser">Modifier</button>
              <button @click="suppUser" class="suppButtonUser">Supprimer mon compte</button>
          </div>
          </div>

    </div>
</template>

<script>
import axios from 'axios';
let params = (new URL(document.location)).searchParams;
let id = params.get('id')
export default {
    
    
   name: 'espace-user',
   
   data(){
       return{
           user : '',
           modifUser: false
       }
   },
   mounted () {
    axios
      .get(`http://localhost:3000/api/auth/` + id)
      .then(response => (this.user = response.data))
   },
   methods:{

       updateUser(){
         this.modifUser = true;
       },

       suppUser(){
          axios
          .delete(`http://localhost:3000/api/auth/` + id)
          .then(response => response)
          sessionStorage.clear();
          location.reload();
          window.location.assign(`http://localhost:8080/`)
       }
   }
   
}


</script>


<style>
.page2{
    font-family: 'Raleway', sans-serif;
}
.imgUser{
    width: 20%;
}
.nameUser{
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 4%;
    margin-top: 5%;
}
.paramsUser{
    font-size: 1.1rem;
    margin-bottom: 3%;
}
.buttonUser{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.modifButtonUser{
    padding: 10%;
    color: white;
    background: green;
    border: 0px;
    cursor: grab;
    border-radius: 15px / 15px;
    font-size: 1rem;
    margin-bottom: 5%;
    font-family: 'Raleway', sans-serif;
}
.suppButtonUser{
    padding: 5%;
    color: white;
    background: red;
    border: 0px;
    cursor: grab;
    border-radius: 15px / 15px;
     font-size: 1rem;
    font-family: 'Raleway', sans-serif;
}
</style>