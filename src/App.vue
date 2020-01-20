<template lang="pug">
    div.container
        h1 Start with Vuex as global store for VueJs
        counter-cmp
        counter-actions
</template>

<script>

    import CounterCmp from "@/components/сounter-сmp";
    import CounterActions from "@/components/counter-actions";

    export default {
        name: 'app',
        components: {
            counterCmp: CounterCmp,
            counterActions: CounterActions,
        },
    }
</script>

<style>
</style>
