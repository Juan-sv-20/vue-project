<template>
    <div class="me">
        <div class="me__div-img">
            <img :src="url" alt="">
        </div>
        <div class="me__div-p">
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'me',
    data() {
        return {
            url: 
            'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/55503396_2110004745748069_6813778642292703232_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=oxohWifxgzMAX9zmF37&_nc_ht=scontent-sjc3-1.xx&oh=2b78264e3185cde24a39e322b3228b9c&oe=60157482',
            text: 'La finalidad para crear esta compañía se desarrolla a partir del momento en el cual decidí adoptar un estilo de vida saludable, ' +
                'consumiendo un adieta balanceada para después pasar por distintas etapas en mi vida, entrando al mundo fitness, adoptar la alimentación '+
                'vegetariana para luego dar los primeros pasos al veganismo, este fue un periodo en el que mi vida se transformó y hoy quiero compartir toda '+
                'mi experiencia de este estilo de vida con ustedes. Quiero darles a conocer los beneficios y las bondades el veganismo nos puede ofrecer.'
        }
    }
}
</script>

<style lang="scss">
@import url('../styles/normalize.css');
    .me {
        height: 300px;
        width: 95%;
        display: grid;
        margin: 3em 2%;
        padding: 12px;
        grid-template-columns: 300px 1fr;
        grid-column-gap: 25px;
        border-radius: 7px;
        box-shadow: 0 2px 25px 0 #ddd;


        &__div-img {

            height: 90%;

            img {
                width: 100%;
                height: 100%;
                border-radius: 10px 0 0 10px;
                box-shadow: 0 0 2px 2px #ddd;
                object-fit: cover;
            }
        }
        &__div-p {
            height: 90%;
            font-family: 'Laila', serif;
            font-size: 20px;
            color: #444;
            text-align: left;
            display: flex;
            justify-content: center;

            p {
                width: 90%;
                margin: auto;
                display: flex;
            }
        }
    }

</style>