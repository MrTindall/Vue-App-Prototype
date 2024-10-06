
app.component('ExerciseListItem', {
    data: function () {
        return {}
    },

    props: {
        item: {
            type: Object,
            required: true,
        },
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
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch"
                                id="flexSwitchCheckDefault" v-model="item.remove">
                            <label class="form-check-label"
                                for="flexSwitchCheckDefault"></label>
                        </div>
                        {{item.name}}
                    </span>
                    <span class="d-flex justify-content-between py-1">
                        Weight: {{item.weight}} lbs
                        <div>
                            <button type="button" class="qtyChange plus ms-2"
                                @click="addWeight(item)">+</button>
                            <button type="button" class="qtyChange minus"
                                @click="subtractWeight(item)">-</button>
                        </div>
                    </span>
                    <span class="d-flex justify-content-between  py-1">
                        Set: {{item.sets}}
                        <div>
                            <button type="button" class="qtyChange plus ms-2"
                                @click="addSet(item)">+</button>
                            <button type="button" class="qtyChange minus"
                                @click="subtractSet(item)">-</button>
                        </div>
                    </span>
                    <span></span>
                </div>
            </li>
    `,
});
