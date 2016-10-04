// Initial state
export const state = {
  filter: 'all',
  tasks: [
    // { label: String, done: Boolean, id: Integer }
  ]
}

// mutations
export const mutations = {
  addTodo (state, label) { state.tasks.push({ label, done: false, id: state.tasks.length }) },
  toggleTodo (state, id, val) { state.tasks.find(t => t.id === id).done = val },
  setFilter (state, filter) { state.filter = filter }
}

// actions
export const actions = {
  addTodo ({ dispatch }, label) { dispatch('addTodo', label) },
  toggleTodo ({ dispatch }, id, val) { dispatch('toggleTodo', id, val) },
  setFilterAll ({ dispatch }) { dispatch('setFilter', 'all') },
  setFilterDone ({ dispatch }) { dispatch('setFilter', 'done') },
  setFilterTodo ({ dispatch }) { dispatch('setFilter', 'todo') },
  setFilter ({ dispatch }, value) { dispatch('setFilter', value) }
}

// getters
export const getters = {
  getTasks: state => {
    if (state.filter === 'all') {
      return state.tasks
    } else if (state.filter === 'done') {
      return state.tasks.filter(t => t.done)
    } else if (state.filter === 'todo') {
      return state.tasks.filter(t => !t.done)
    }
  },
  getFilter: state => state.filter
}
