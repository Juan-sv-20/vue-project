<template>
    <li>{{ data.text }}</li>
</template>

<script>
export default {
    name: "todo-item",
    props: ["data"]
}
</script>
