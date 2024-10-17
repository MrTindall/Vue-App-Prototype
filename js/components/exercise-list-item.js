app.component('ExerciseListItem', {
    data: function () {
        return {}
    },

    props: {
        item: {
            type: Object,
            required: true,
        },
        isButton: {
            type: Boolean,
            default: false,
        }
    },

    methods: {
        addSet() {
            this.item.sets++
        },

        subtractSet() {
            if (this.item.sets > 0) {
                this.item.sets--;
            }
        },

        addWeight() {
            this.item.weight = this.item.weight + 2.5
        },

        subtractWeight() {
            if (this.item.weight > 0) {
                this.item.weight -= 2.5;
            }
        },
    },

    template: `
        <div class="card custom-card mt-3 mx-2">
            <div class="card-body p-3">
                <!-- Item Name with Checkbox -->
                <div class="d-flex align-items-center justify-content-start mb-2">
                    <div class="form-check ">
                        <input class="form-check-input" type="checkbox" v-model="item.remove" id="removeSwitch">
                    </div>
                    <span>{{item.name}}</span>
                    
                </div>
                
                <!-- Weight Information with Increment/Decrement Buttons -->
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <strong>lbs:</strong>
                    <span>{{item.weight}}</span>
                    <div v-show="isButton" class="ms-2">
                        <button type="button" class="qtyChange plus ms-1" @click="addWeight()">+</button>
                        <button type="button" class="qtyChange minus ms-1" @click="subtractWeight()">-</button>
                    </div>
                </div>
                
                <!-- Set Information with Increment/Decrement Buttons -->
                <div class="d-flex align-items-center justify-content-between">
                    <strong>Set:</strong>
                    <span>{{item.sets}}</span>
                    <div v-show="isButton" class="ms-2">
                        <button type="button" class="qtyChange plus ms-1" @click="addSet()">+</button>
                        <button type="button" class="qtyChange minus ms-1" @click="subtractSet()">-</button>
                    </div>
                </div>
            </div>
        </div>
    `,
});
