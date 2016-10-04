// Initial state
export const state = {
  count: 0
}

// mutations
export const mutations = {
  increment (state) { state.count++ },
  decrement (state) { state.count = Math.max(0, state.count - 1) }
}

// actions
export const actions = {
  increment ({ dispatch }) { dispatch('increment') },
  decrement ({ dispatch }) { dispatch('decrement') }
}

// getters
export const getters = {
  getCount: state => state.count
}
