const bootstrap = require("bootstrap");

app.component('WorkoutListItem', {
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
        toggle() {
            this.workoutCollapse.toggle();
        }
    },

    computed: {

    },
    mounted() {
        this.workoutCollapse = new bootstrap.Collapse(this.$refs.theCollapse, {toggle: false});
    },

    template: `
        <li class="list-group-item mt-3 mx-2">
            <div class="d-flex flex-column flex-lg-row justify-content-between">
                <span class="d-flex py-1">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch"
                            id="flexSwitchCheckDefault">
                        <label class="form-check-label"
                            for="flexSwitchCheckDefault"></label>
                    </div>
                    <span class="testing">{{item.title}}</span>
                </span>
                <span class="d-flex justify-content-between py-1">
                    <span>Total Exercises: {{item.exercises.length}}</span>
                </span>
                <span class="d-flex justify-content-between py-1">
                    <span></span>
                    <span>
                        <button class="addWorkout p-0" type="button" @click="toggle()">Display</button>
                        </p>
                    </span>
                </span>
            </div>
            <div class="collapse" ref="theCollapse">
                <div class="card card-body card-body-exercisesList">
                    <exercise-list title="Todo List"
                        :list="exerciseLibraryList"></exercise-list>
                </div>
            </div>
        </li>
    `,
});
