<template lang="pug">
    div.container
        h1 Start with Vuex as global store for VueJs
        CounterCmp
        CounterActions
</template>

<script>

    import CounterCmp from "./components/CounterCmp";
    import CounterActions from "./components/CounterActions";

    export default {
        name: 'app',
        components: {
            CounterActions,
            CounterCmp,
        },

    }
</script>

<style>
</style>
