app.component('WorkoutListItem', {
    data: function () {
        return {
            isCollapsed: true, // Initialize the collapsed state
        };
    },

    props: {
        item: {
            type: Object,
            required: true,
        },
        isButton: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        toggle() {
            this.isCollapsed = !this.isCollapsed; // Toggle the local state
            this.workoutCollapse.toggle(); // Keep your existing toggle method
        }
    },

    mounted() {
        this.workoutCollapse = new bootstrap.Collapse(this.$refs.theCollapse, { toggle: false });
    },

    template: `
        <li class="list-group-item mt-3 mx-2">
            <div class="d-flex flex-column flex-lg-row justify-content-between">
                <span class="d-flex py-1">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                    </div>
                    <span class="testing">{{item.title}}</span>
                </span>
                <span class="d-flex justify-content-between py-1">
                    <span>Total Exercises: {{item.exercises.length}}</span>
                </span>
                <span class="d-flex justify-content-between py-1">
                    <span></span>
                    <span>
                        <button 
                            class="qtyChange p-0"
                            type="button" 
                            @click="toggle()"
                            v-show="isCollapsed"
                        >
                            &#x25B2; <!-- Up-pointing Triangle -->
                        </button>
                        <button 
                            class="qtyChange p-0"
                            type="button" 
                            @click="toggle()"
                            v-show="!isCollapsed"
                        >
                            &#x25BC; <!-- Down-pointing chevron -->
                        </button>
                    </span>
                </span>
            </div>
            <div class="collapse" ref="theCollapse">
                <div class="card card-body card-body-exercisesList added-background-color">
                    <exercise-list :title="'Exercises'" :list="item.exercises" :isButton="isButton"></exercise-list>
                </div>
            </div>
        </li>
    `,
});
