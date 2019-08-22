import axios from "axios";

const state = {
  users: []
};

const getters = {
  allUsers: state => state.users
};

const actions = {
  async fetchUsers({ commit }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    commit("setUsers", res.data);
  },
  async addUser({ commit }, [name, username, email]) {
    const res = await axios.post("https://jsonplaceholder.typicode.com/users", {
      name,
      username,
      email
    });

    commit("newUser", res.data);
  },
  async deleteUser({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    commit("removeUser", id);
  },
  async updateUser({ commit }, updUser) {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${updUser.id}`,
      updUser
    );

    console.log(response.data);

    commit("updateUser", response.data);
  }
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  newUser: (state, user) => state.users.unshift(user),
  removeUser: (state, id) =>
    (state.users = state.users.filter(user => user.id !== id)),
  updateUser: (state, updUser) => {
    const index = state.users.findIndex(user => user.id === updUser.id);
    if (index !== -1) {
      state.users.splice(index, 1, updUser);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
