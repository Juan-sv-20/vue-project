<template>
    <div class="eslogan">
        <h1 class="eslogan__h1">Por que lo saludable tambien es rico</h1>
    </div>
</template>

<script>
export default {
    name: 'eslogan',
}
</script>

<style lang="scss">
    .eslogan {
        height: auto;
        margin: 20px 0;
        display: flex;
        justify-content: center;

        &__h1 {
            font-family: 'Parisienne', cursive;
            font-size: 35px;
            color: #444;
        }
    }
    @media only screen and (max-width: 1000px) {
        .eslogan__h1 {
            font-size: 25px;
        }
    }
    @media only screen and (max-width: 400px) {
        .eslogan__h1 {
            font-size: 20px;
        }
    }
</style>