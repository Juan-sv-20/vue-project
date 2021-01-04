<template>
    <div class="blog">
        <Post v-for="(post, index) in posts"
        :key="index"
        :title="post.title"
        :text="post.text"
        :img="post.img"
        ></Post>
    </div>
</template>

<script>
import Post from "@/components/post.vue";
import * as firebase from "firebase/app";
import '../scripts/firebaseConfig.js';


export default {
    name: "blog",
    data() {
        return {
            posts: [],
        }
    },
    created() {
        var db = firebase.default.database();

        db.ref('posts/me').on('value', snapshot => {
            this.posts.push(snapshot.val());
        });
    },
    components: {
        Post,
    }
}
</script>

<style>

</style>