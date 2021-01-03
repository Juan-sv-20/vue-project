<template>
    <div class="container-info">
        <div class="container-info__title">
            <h2>{{ title }}</h2>
        </div>
        <div class="container-info__text">
            <p>{{ text }}</p>  
        </div>
    </div>
</template>

<script>
export default {
    name: "show-info",
    props: {
        title: {
            text: String,
            required: true
        },
        text: {
            text: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
    .container-info {
        width: 95%;
        display: grid;
        grid-template-rows: 50px 1fr;
        margin-top: 15px;
        padding: 20px;

        &__title {
            margin: auto;
            font-family: 'Laila', serif;
            font-size: 22px;
            color: #444;
        }

        &__text {
            margin: auto;
            text-align: center;
            font-family: 'Laila', serif;
            font-size: 17px;
            color: #444;
        }
    }

    @media only screen and (max-width: 1000px) {
        .container-info__title {
            font-size: 18px;
        }
        .container-info__text {
            font-size: 15px;
        }
    }
</style>
