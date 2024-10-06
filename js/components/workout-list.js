
app.component('WorkoutList', {
    data: function () {
        return {}
    },

    props: {
        list: {
            type: Array,
            required: true,
        },
    },

    methods: {

    },

    computed: {

    },

    template: `
        <ul class="list-group list-group-flush mb-3">
            <workout-list-item v-for="item in list" :item="item"></workout-list-item>
        </ul>
    `,
});
