<template>
    <div class="eslogan">
        <p class="eslogan__p">Por que lo saludable tambien es rico</p>
    </div>
</template>

<script>
export default {
    name: 'eslogan',
}
</script>

<style lang="scss">
    .eslogan {
        height: 55px;
        margin-top: 20px;
        display: flex;
        justify-content: center;

        &__p {
            font-family: 'Parisienne', cursive;
            font-size: 35px;
            color: #444;
        }
    }
</style>