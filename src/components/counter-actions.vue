<template lang="pug">
    div
        button.btn.btn-success(@click.stop="changeCount(1)") Up counter
        | &nbsp;
        button.btn.btn-danger(@click.stop="changeCount(-1)") Down counter
        | &nbsp;
        button.btn.btn-secondary(@click.stop="upCountDelay($event, 1, 1500)")
            | #[span.spinner-border.spinner-border-sm.d-none ]
            | Up +1 with delay 1500 ms
        .alert.alert-info.mt-3(v-if="isCounterNegative") Ooops! Your counter is negative!
</template>

<script>
    export default {
        name: "CounterActions",
        methods: {
            changeCount(value) {
                this.$store.commit("setCounter", value);
            },
            upCountDelay(event, value, delay) {
                this.$store.dispatch("asyncSetCounter", {delay: delay, value: value, btn: event.target});
            },
        },
        computed: {
            isCounterNegative() {
                return this.$store.getters.counter < 0;
            }
        }
    }
</script>
