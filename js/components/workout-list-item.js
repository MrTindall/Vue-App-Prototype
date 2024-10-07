
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

    },

    computed: {

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
                    <span class="testing">{{item}}</span>
                </span>
                <span class="d-flex justify-content-between py-1">
                    <span class="">Total Exercises: {{Need to add}}</span>
                </span>
                <span class="d-flex justify-content-between py-1">
                    <span></span>
                    <span class="">
                        <button class="addWorkout p-0" type="button"
                            data-bs-toggle="collapse" data-bs-target="#exercisesList1"
                            aria-expanded="false" aria-controls="collapseExample1">
                            Display
                        </button>
                        </p>
                    </span>
                </span>
            </div>
            <div class="collapse" id="exercisesList1">
                <div class="card card-body card-body-exercisesList">
                    <exercise-list title="Todo List"
                        :list="exerciseLibraryList"></exercise-list>
                </div>
            </div>
        </li>
    `,
});
