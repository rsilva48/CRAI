<template>
    <div class="d-flex flex-column vh-100">
        <NavBar class="" />
        <router-view class="mb-auto" @loginuser="getLogin()" />
        <AppFooter class="mt-auto" />
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import moment from 'moment'
import AppFooter from './components/Footer.vue'
import { cubRef, PCsRef, db } from './services/firebase'
import { setInterval } from 'timers-browserify'
import { onValue, query, set, ref } from 'firebase/database'
export default {
    name: 'App',
    components: {
        NavBar,
        AppFooter,
    },
    data() {
        return {
            listado: [],
            listadopc: [],
            logged: '',
        }
    },
    created() {
        moment.locale('es')
        setInterval(() => {
            this.rutina()
        }, 10000)
    },
    methods: {
        rutina() {
            this.getCub()
            this.getPCs()
        },
        moment() {
            return moment()
        },
        setForm(id) {
            this.listado[id - 1].status = true
            let form = Object.assign({}, this.listado[id - 1])
            let NewFormRef = ref(db, 'cubiculos/' + form.id)
            set(NewFormRef, form)
        },
        getCub() {
            onValue(
                query(cubRef),
                (res) => {
                    let data = res.val()
                    this.listado = Object.values(data)
                    this.listado.forEach((cub) => {
                        let end = moment(cub.date_end, 'dddd D/M/YY HH:mm:ss')
                        let now = moment()
                        let dif = end.diff(now, 'seconds')
                        if (dif <= 0 && cub.status == false) {
                            this.setForm(cub.id)
                            return true
                        }
                    })
                },
                {
                    onlyOnce: true,
                },
            )
        },
        setPCStatus(id) {
            this.listadopc[id - 1].status = true
            let form = Object.assign({}, this.listadopc[id - 1])
            let NewPCRef = ref(db, 'pcs/' + form.id)
            set(NewPCRef, form)
        },
        getPCs() {
            onValue(
                query(PCsRef),
                (res) => {
                    let data = res.val()
                    this.listadopc = Object.values(data)
                    this.listadopc.forEach((pc) => {
                        let end = moment(pc.date_end, 'dddd D/M/YY HH:mm:ss')
                        let now = moment()
                        let dif = end.diff(now, 'seconds')
                        if (dif <= 0 && pc.status == false) {
                            this.setPCStatus(pc.id)
                            return true
                        }
                    })
                },
                {
                    onlyOnce: true,
                },
            )
        },
    },
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}

.centertext {
    text-align: center;
}
</style>
