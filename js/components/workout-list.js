app.component('WorkoutList', {
    props: {
        list: {
            type: Array,
            required: true,
        },
        isButton: {
            type: Boolean,
            default: false,
        },
    },
    template: `
        <ul class="list-group list-group-flush mb-3">
            <workout-list-item 
                v-for="item in list" 
                :key="item.title" 
                :item="item"
                :isButton="isButton">
            </workout-list-item>
        </ul>
    `,
});