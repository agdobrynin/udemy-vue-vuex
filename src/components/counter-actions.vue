<template lang="pug">
    div
        button.btn.btn-success(@click.stop="changeCount(1)") Up counter
        | &nbsp;
        button.btn.btn-danger(@click.stop="changeCount(-1)") Down counter
        .alert.alert-info.mt-3(v-if="isCounterNegative") Ooops! Your counter is negative!
</template>

<script>
    export default {
        name: "CounterActions",
        methods: {
            changeCount(value) {
                this.$store.state.counter+=value;
            }
        },
        computed: {
            isCounterNegative() {
                return this.$store.getters.counter < 0;
            }
        }
    }
</script>
