<template>
    <div class="container">
        <div class="container__title">
            <h2>{{ title }}</h2>
        </div>
        <div class="container__div">
            <div class="container__div-img">
                <img src="../assets/producto.jpeg" alt="">
            </div>
            <div class="container__div-description">
                <h4>{{ description }}</h4>
                <p>{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product',
    data() {
        return {
            title: 'PRODUCTO',
            description: 'Chorizo 150gr',
            text: "Este producto esta hecho 100% de origen vegetal, libre de todo tipo de grasa animal. Alguna vez imaginaste comer sano pero con el mismo sabor de siempre, "+
            "no dudes en probar nuestro producto, te vamos a sorprender!!",
        }
    }
}
</script>

<style lang="scss">
    .container {
        width: 80%;
        height: 370px;
        display: grid;
        grid-template-rows: 70px 1fr;
        margin: auto;

        &__title {
            margin: auto;
            font-family: 'Laila', serif;
            color: #444;
        }
        &__div {
            display: grid;
            grid-template-columns: 300px 1fr;
            grid-column-gap: 2em;

            &-img {
                width: 100%;
                height: 100%;

                img {
                    box-shadow: 0 0 8px 5px #ddd;
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                }
            }

            &-description {
                display: grid;
                grid-template-rows: 70px 1fr;
                font-family: 'Laila', serif;
                color: #444;

                h4 {
                    margin: auto;
                    font-size: 25px;
                }
            }
        }
    }
    @media only screen and (max-width: 800px) {
        .container {
            width: 90vw;
            height: auto;
            grid-template-rows: 70px 1fr;

            &__div {
                grid-template-columns: none;
                grid-template-rows: 60% 1fr;

                &-img {
                    width: 85%;
                    height: 85%;
                    margin: auto;
                }

                &-description {
                    h4 {
                        font-size: 25px;
                    }
                    p {
                        font-size: 15px;
                        text-align: center;
                        margin: auto;
                    }
                }
            }
        }
    }
</style>