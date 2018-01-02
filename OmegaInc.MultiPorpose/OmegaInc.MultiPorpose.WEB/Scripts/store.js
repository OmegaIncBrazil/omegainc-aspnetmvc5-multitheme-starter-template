/*
 *  Vuex Store
 *  Local aonde todas as variaveis da aplicação são armazenados e todos os
 *  componentes serão alimentados a partir desta store.
 * 
 *  Para atualizar um dado da store deve se utilizar um método nas mutations.
 * 
 *  Jefferson Mello Olynyki 19/08/2017
 * 
*/
const store = new Vuex.Store({
  //Local aonde sao armazenado os dados.
  state: {
    xuxu: 'KKK'
  },

  // Local aonde sao implementados os métodos que iram alterar dados da store.
  // Para chamar um método da mutations é necessario utilizar a funcao commit da seguinte forma:
  // store.commit('nome do metodo');
  mutations: {
    // para chamar o metodo utilizar :
    // store.commit('alterXuxu', parameter);
    alterXuxu: function(state, novoxuxu)
    {
      state.xuxu = novoxuxu;
    }
  },
});