// app.component('ExerciseListItem', {
//     data: function () {
//         return {}
//     },

//     props: {
//         item: {
//             type: Object,
//             required: true,
//         },
//         isButton: {
//             type: Boolean,
//             default: false,
//         }
//     },

//     methods: {

//     },

//     template: `
//         <div class="card custom-card mt-3 mx-2">
//             <div class="card-body p-3">
//                 <div class="d-flex align-items-center justify-content-start mb-2">
//                     <div class="form-check ">
//                         <input class="form-check-input" type="checkbox" v-model="item.remove" id="removeSwitch">
//                     </div>
//                     <span>{{item.name}}</span>               
//                 </div>
                
//                 <div class="d-flex align-items-center justify-content-between mb-2">
//                     <span>lbs: {{item.amount}}</span>
//                     <div v-show="isButton" class="ms-2">
//                         <button type="button" class="qtyChange plus ms-1" @click="item.addWeight()">+</button>
//                         <button type="button" class="qtyChange minus ms-1" @click="item.subtractWeight()">-</button>
//                     </div>
//                 </div>
                
//                 <div class="d-flex align-items-center justify-content-between">
//                     <span>Set: {{item.sets}}</span>
//                     <div v-show="isButton" class="ms-2">
//                         <button type="button" class="qtyChange plus ms-1" @click="item.addSet()">+</button>
//                         <button type="button" class="qtyChange minus ms-1" @click="item.subtractSet()">-</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `,
// });


