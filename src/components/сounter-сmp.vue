<template lang="pug">
    h1.text-info Counter is: {{ counter }}
</template>

<script>
    export default {
        name: "CounterCmp",
        computed: {
            counter() {
                return this.$store.state.counter;
            },
        }
    }
</script>
