const state = {
  supportedLanguages: {
    'zh-TW': {
      id: 0,
      name: '中文'
    },
    'en-US': {
      id: 1,
      name: 'English'
    }
  }
}

const getters = {
  defaultLanguage () {
    return 'zh-TW'
  },
  defaultLanguageId ({ state, getters }) {
    return state[getters.defaultLanguage].id
  },
  getLanguageNames ({ state }) {
    return Object.keys(state.supportedLanguages)
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
