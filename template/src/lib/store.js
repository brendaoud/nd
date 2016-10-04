import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Default module
const defaultModule = {
  state: {}, mutations: {}, boundActions: {}, boundGetters: {}
}

// Load Modules
const files = require.context('src/vuex', false, /\.js$/)
const modules = {}
files.keys().forEach(key => modules[key.replace(/(\.\/|\.js)/g, '')] = Object.assign({}, defaultModule, files(key)))

// Store
export const store = new Vuex.Store({
  modules: _.mapValues(modules, ({ state, mutations }) => {
    return { state, mutations }
  })
})

// Actions
export const actions = mergeMap(name => modules[name].actions)
export const boundActions = bind(getters, store)

// Getters
export const getters = mergeMap(name => _.mapValues(modules[name].getters, getter => {
  return (state, ...args) => getter(state[name], ...args)
}))
export const boundGetters = bind(getters, store.state)

export function getState () { return store.state }

export default { store, boundActions, actions, boundGetters, getters, getState }

// Helpers
function bind (functions, value) {
  return _.mapValues(functions, fn => {
    return (...args) => fn(value, ...args)
  })
}

function mergeMap (fn) {
  return _.merge({},
    ...Object.keys(modules).map(fn)
  )
}
