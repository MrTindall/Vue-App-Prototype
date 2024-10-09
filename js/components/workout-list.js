app.component('WorkoutList', {
    props: {
        list: {
            type: Array,
            required: true,
        },
    },
    template: `
        <ul class="list-group list-group-flush mb-3">
            <workout-list-item 
                v-for="item in list" 
                :key="item.title" 
                :item="item">
            </workout-list-item>
        </ul>
    `,
});