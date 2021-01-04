<template>
  <div class="home">
    <!--
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    -->
    <Eslogan></Eslogan>
    <Product class="pro"></Product>

    <div class="banner">
      <span>Ingresa a nuestra pagina de facebook para conocer mas sobre VEGANISIMO, aprender como cuidar tu salud de manera saludable <a :href="urlFacebook" target="_blank"><i class="fab fa-facebook-square"></i></a></span>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src

import Product from "@/components/product.vue";
import Eslogan from "@/components/eslogan.vue";

export default {
  name: "Home",
  data() {
    return {
      urlFacebook: 'https://www.facebook.com/Veganisimo-ensenada-100760355259842',
    };
  },
  components: {
    Product,
    Eslogan,
  }
};
</script>

<style lang="scss">

  .banner {
    margin: 135px auto;
    width: 90%;
    text-align: center;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 0 2px 2px #ddd;
    padding: 15px;

    span {
      font-size: 15px;
      font-family: 'Laila', serif;
      color: #444;

      i{
        font-size: 25px;
        color: #444;
      }
    }
  }

   @media only screen and (max-width: 800px)  {
     .banner {
       font-size: 10px;
       i {
         font-size: 20px;
       }
     }
   }
</style>