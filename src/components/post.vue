<template>
    <div class="post">
        <div class="post__div-img">
            <img :src=img alt="">
        </div>
        <div class="post__div-content">
            <div class="post__div-content-title">
                <h2>{{ title }}</h2>
            </div>
            <div class="post__div-content-text">
                <p>{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'post',
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: false,
        }
    }
}
</script>

<style lang="scss">

$width: 100vw;

.post {
    display: grid;
    width: $width * .9;
    height: auto;
    margin: 15px auto;
    grid-template-columns: ($width * .9 * .25) 1fr;

    &__div-img {
        margin: auto;
        width: ($width * .9 * .25 * .9);
        height: ($width * .9 * .25 * .9);
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__div-content {
        display: grid;
        grid-template-rows: 40px 1fr;

        &-title {
            margin: auto;
        }

        &-text {
            margin: 15px 25px;
        }

    }
}
</style>