import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export type RootState = {
  deleteModalObj: {
    showDeleteModal: boolean;
    deleteUrl: string;
    data: null;
    deletingIndex?: number;
    isDeleted: boolean;
    msg?: string;
  };
  user: {
    user: any;
  };
};

export default () =>
  new Vuex.Store<RootState>({
    state: {
      deleteModalObj: {
        showDeleteModal: false,
        deleteUrl: "",
        data: null,
        deletingIndex: -1,
        isDeleted: false,
        msg: "sadasdas",
      },
      user: {
        user: false,
      },
    },
    getters: {
      getDeleteModalObj(state) {
        return state.deleteModalObj;
      },
    },
    mutations: {
      setDeleteModal(state, data) {
        const deleteModalObj = {
          showDeleteModal: false,
          deleteUrl: "",
          data: null,
          //deletingIndex: -1,
          isDeleted: data,
        };
        state.deleteModalObj = deleteModalObj;
      },
      setDeletingModalObj(state, data) {
        state.deleteModalObj = data;
      },

      setUpdateUser(state, data) {
        state.user = data;
      },
    },
    actions: {},
  });
