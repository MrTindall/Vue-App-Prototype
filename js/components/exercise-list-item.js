
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

    computed: {

    },

    template: `
        <li class="list-group-item mt-3 mx-2">
            <div class="row">

                <!-- Left Column: Checkbox and Name -->
                <div class="col-12 col-lg-3 d-flex align-items-center py-1">
                    <div class="form-check me-2">
                        <input class="form-check-input" type="checkbox" id="flexCheckboxDefault" v-model="item.remove">
                        <label class="form-check-label" for="flexCheckboxDefault"></label>
                    </div>
                    <span>{{item.name}}</span>
                </div>

                <!-- Right Column: Weight and Set Controls -->
                <div class="col-12 col-lg-9">
                    <div class="d-flex flex-column flex-lg-row justify-content-around">

                        <!-- Weight Section -->
                        <div class="d-flex align-items-center justify-content-between py-1">
                            <span>Weight: {{item.weight}} lbs.</span>
                            <div v-show="isButton" class="d-flex ms-2">
                                <button type="button" class="qtyChange plus ms-2" @click="addWeight()">+</button>
                                <button type="button" class="qtyChange minus ms-1" @click="subtractWeight()">-</button>
                            </div>
                        </div>

                        <!-- Sets Section -->
                        <div class="d-flex align-items-center justify-content-between py-1">
                            <span>Set: {{item.sets}}</span>
                            <div v-show="isButton" class="d-flex ms-2">
                                <button type="button" class="qtyChange plus ms-2" @click="addSet()">+</button>
                                <button type="button" class="qtyChange minus ms-1" @click="subtractSet()">-</button>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between py-1">
                            <span></span>
                        </div>
                    </div>
                </div>

            </div>
        </li>
    `,
});
