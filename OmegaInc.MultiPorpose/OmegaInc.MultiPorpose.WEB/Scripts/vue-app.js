var app = new Vue({
    el: '#app',
    // Vuex Store
    // Para acessar valores na store utilizar:
    // this.$store.state.variavelNaStore;
    store,

    components: {

    },

    data: {
        ApplicationConfig: {
            version: "1.0.0",
            title: "Omega MultiPorpose",
            currentPageTitle: ""
        },

    }
});