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
        <div class="d-flex flex-wrap mb-3 justify-content-start mx-2">
            <exercise-list-item 
                v-for="item in list"
                :item="item" 
                :isButton="isButton"
                class="mb-1"
                :key="item.name"
            ></exercise-list-item>
        </div>
    `,
});
