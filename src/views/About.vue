<template>
  <div class="about">
    <Eslogan></Eslogan>
    <Me></Me>
    <div class="info-container">
      <Info
      v-for="(information, index) in info" 
      :key="index"
      :title="information.title"
      :text="information.text"></Info>
    </div>
  </div>
</template>

<script>
import Eslogan from "@/components/eslogan.vue";
import Info from "@/components/show-info.vue";
import Me from "@/components/me-info.vue";

export default {
  name: "about",
  data() {
    return {
      info: [
        {
          title: 'Compañia',
          text: "Veganisimo surge por una necesidad de guiar a la sociedad hacia un estilo de vida saludable – que brinde calidad y sume más vida a "+
          "la vida, vitalidad y fortaleza. \nPor lo cual está dirigido a la comunidad que necesita de productos cárnicos alternativos como lo son, "+
          "las personas que padece de obesidad y desea reducir tallas, personas con enfermedades crónicas como diabetes, hipertensión y desean una variedad en "+
          "su dieta, personas que sufren alguna enfermedad del sistema digestivo como gastritis, colitis; está diseñado para toda la comunidad que apoya las "+
          "campañas de cero productos de origen animal y vegetarianos. No solo para ellos, ¡Veganisimo es para todos aquellos que queremos un cambio una "+
          "nuestra vida, que deseamos hacer un bien a nuestra comunidad, Veganisimo es para todos!",
        },
        {
          title: 'Misión',
          text: "Promover la salud y bienestar a la comunidad mediante productos veganos ricos y saludables en beneficio a la sociedad con padecimientos de "+
          "enfermedades crónicas como, diabetes, hipertensión, tiroides, entre muchos otros padecimientos que la obesidad y un amala dieta favorecen.",
        },
        {
          title: 'Visión',
          text: "Ser el principal proveedor de productos alternativos veganos a la comunidad con un estilo de vida saludable, incluir e influir en el "+
          "resto de personas con padecimientos de enfermedades, mejorando la calidad de vida de la entidad.",
        },
        {
          title: 'Objetivo',
          text: "Lograr ser la mejor opción para la comunidad con enfermedades crónicas y estilos de vida saludables, promoviendo los buenos "+
          "hábitos alimenticios mediante la ideología lo saludable también puede ser rico.",
        },
        {
          title: 'Estilo de vida',
          text: "El estilo de vida que se busca obtener es el que ofrece más vida a la vida, es decir, el que mejora y nos brinda una mejor "+
          "calidad de vida y ese es el veganismo, el fitness y la libertad.",
        },
      ],
    };
  },
  components: {
    Eslogan,
    Info,
    Me,
  }
}
</script>

<style lang="scss">
  .info-container {
    width: 95%;
    margin: 15px auto;
    border-radius: 7px;
    box-shadow: 0 2px 25px 0 #ddd;
  }
</style>