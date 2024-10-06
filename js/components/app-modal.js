
app.component('AppModal', {
    data: function () {
        return {}
    },

    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: "Modal Title",
        },
    },

    methods: {
        
    },

    computed: {

    },

    template: `
        <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="removeWorkoutModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal-background-color">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalTitle">{{title}}
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <slot name="modal-body">

                        </slot>
                    </div>
                    <slot name="modal-footer">

                    </slot>
                </div>
            </div>
        </div>
    `,
});
