// app.component('ExerciseList', {
//     data: function () {
//         return {}
//     },

//     props: {
//         title: {
//             type: String,
//         },
//         list: {
//             type: Array,
//             required: true,
//         },
//         isButton: {
//             type: Boolean,
//             default: false,
//         }
//     },

//     template: `
//         <div class="d-flex flex-wrap mb-3 justify-content-start mx-2">
//             <!-- <div v-for="item in list">
//                 <component :is="item.constructor.name + 'Exercise'" :item="item" />
//             </div> -->
//             <exercise-list-item 
//                 v-for="item in list"
//                 :item="item" 
//                 :isButton="isButton"
//                 class="mb-1"
//                 :key="item.name"
//             ></exercise-list-item>
//         </div>
//     `,
// });

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