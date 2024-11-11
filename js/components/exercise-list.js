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
            <div v-for="item in list" :key="item.name" class="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                <component 
                    :is="item.constructor.type + 'Exercise'"
                    :item="item" 
                    :isButton="isButton"
                    class="mb-1"
                ></component>
            </div>
        </div>
    `
});
