app.component('ExerciseList', {
    props: {
        title: {
            type: String
        },
        list: {
            type: Array,
            required: true
        },
        isButton: {
            type: Boolean,
            default: false
        }
    },
    template: `
        <div class="d-flex flex-wrap mb-3 justify-content-start mx-2">
            <component 
                v-for="item in list"
                :is="item.constructor.type + 'Exercise'"
                :item="item" 
                :isButton="isButton"
                :key="item.name"
                class="mb-1"
            ></component>
        </div>
    `
});