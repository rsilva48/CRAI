<template>
    <div class="small">
        <h4>¿Qué sexo se registró más?</h4>
        <LineChart :chart-data="datacollection" :height="100" />
    </div>
</template>

<script>
import LineChart from './LineChart.js'

export default {
    name: 'CRAIGraficos',
    components: {
        LineChart,
    },
    data() {
        return {
            datacollection: null,
        }
    },
    mounted() {
        this.fillData()
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
                datasets: [
                    {
                        label: 'Masculino',
                        backgroundColor: '#0000ff',
                        data: [10, 90, 20, 50, 10, 80],
                    },
                    {
                        label: 'Femenino',
                        backgroundColor: '#e40078',
                        data: [20, 40, 50, 20, 50, 40],
                    },
                ],
            }
        },
    },
}
</script>

<style lang="css">
.small {
    max-width: 800px;
    /* max-height: 500px; */
    margin: 50px auto;
}
</style>
