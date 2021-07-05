const state = {
  supportedLanguages: [
    {
      name: '中文',
      code: 'zh-TW'
    },
    {
      name: 'English',
      code: 'en-US'
    }
  ],
  defaultLanguageId: 0
}

const getters = {
  currentLanguageId (state) {
    return new URLSearchParams(window.location.search).get('languageId') || state.defaultLanguageId
  },
  currentLanguage (state, getters) {
    return state.supportedLanguages[getters.currentLanguageId].code
  }
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
