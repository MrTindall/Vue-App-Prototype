
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
                <div class="d-flex flex-column flex-lg-row justify-content-between">
                    <span class="d-flex py-1">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckDefault" v-model="item.remove">
                        </div>
                        {{item.name}}
                    </span>
                    <span class="d-flex justify-content-between py-1">
                        lbs: {{item.weight}}
                        <div v-show="isButton">
                            <button type="button" class="qtyChange plus ms-2"
                                @click="addWeight()">+</button>
                            <button type="button" class="qtyChange minus"
                                @click="subtractWeight()">-</button>
                        </div>
                    </span>
                    <span class="d-flex justify-content-between  py-1">
                        Set: {{item.sets}}
                        <div v-show="isButton">
                            <button type="button" class="qtyChange plus ms-2"
                                @click="addSet()">+</button>
                            <button type="button" class="qtyChange minus"
                                @click="subtractSet()">-</button>
                        </div>
                    </span>
                    <span></span>
                </div>
            </li>
    `,
});
