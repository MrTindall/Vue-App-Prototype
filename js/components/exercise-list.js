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

    template: `
        <div class="d-flex flex-wrap mb-3 justify-content-start">
            <exercise-list-item 
                v-for="item in list" 
                :key="item.id" 
                :item="item" 
                :isButton="isButton"
                class="mx-2 mb-1"
            ></exercise-list-item>
        </div>
    `,
});
