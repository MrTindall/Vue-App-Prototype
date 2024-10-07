
app.component('ExerciseList', {
    data: function () {
        return {}
    },

    props: {
        title: {
            type: String,
        },
        list: {
            type: Array,
            required: true,
        },
        isButton: {
            type: Boolean,
            default: false,
        }
    },

    methods: {

    },

    computed: {

    },

    template: `
        <ul class="list-group list-group-flush mb-3">
            <exercise-list-item v-for="item in list" :item="item" :isButton="isButton"></exercise-list-item>
        </ul>
    `,
});
