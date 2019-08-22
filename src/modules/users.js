import axios from "axios";

const state = {
  users: [],
  notice: null,
  recentDeletion: null
};

const getters = {
  allUsers: state => state.users,
  notice: state => state.notice,
  deletion: state => state.recentDeletion
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

    commit("addUser", res.data);
  },
  async deleteUser({ commit }, [name, username, email]) {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${email}`);

    commit("deleteUser", [name, username, email]);
  }
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  addUser: (state, newUser) => {
    const index = state.users.findIndex(user => user.email === newUser.email);
    if (!newUser.name || !newUser.username || !newUser.email) {
      return (state.notice = "Please fill out all the fields.");
    }
    if (index === -1) {
      state.users.unshift(newUser);
      state.notice = null;
    } else {
      state.notice = "User with Email already exists.";
    }
  },
  deleteUser: (state, oldUser) => {
    state.users = state.users.filter(user => user.email !== oldUser[2]);
    state.recentDeletion = oldUser;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
