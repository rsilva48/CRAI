<template>
    <div class="CubSolReal">
        <div class="container-fluid px-4 py-5 px-md-5 font bg-light">
            <div class="container">
                <h1 class="display-4">Cubículo #{{ $route.params.id }} Solicitado</h1>
                <p class="lead">Puede retirar la llave e ir a utilizarlo.</p>
                <hr class="my-4" />
                <router-link to="/cub/list" class="btn btn-primary btn-lg me-1" href role="button">
                    Lista de Cubículos
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CubSolReal',
}
</script>
