<template>
    <div class="CubSol">
        <div class="container-fluid py-4 p-xl-5 font bg-light">
            <div class="container">
                <h1 class="display-4">Solicitud de Cubículo</h1>
                <p class="lead">Llene la siguiente información para reservar un cubículo.</p>
            </div>
        </div>
        <FormSolCub @send2view="send2app" />
    </div>
</template>

<script>
import FormSolCub from '@/components/Cub/FormSolCub.vue'
export default {
    name: 'CubSol',
    components: {
        FormSolCub,
    },
    emits: ['cubform'],
    methods: {
        send2app(childform) {
            this.$emit('cubform', childform)
        },
    },
}
</script>
