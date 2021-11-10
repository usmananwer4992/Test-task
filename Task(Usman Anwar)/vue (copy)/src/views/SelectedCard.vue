<template>
  <div class="home">
    <div class="head">
      <h1>Selected Cards: {{ id }}</h1>
    </div>
    <hr />
    <div v-for="row in allCards" :key="row.card_number" class="box">
      <div class="content">
        <label for="">Card Number</label>
        <span>{{ row.card_number }}</span>
      </div>
      <div class="content">
        <label for="">First name</label>
        <span>{{ row.first_name }}</span>
      </div>
      <div class="content">
        <label for="">last name</label>
        <span>{{ row.last_name }}</span>
      </div>
      <div class="content">
        <label for="">MemberShip</label>
        <span>{{ row.membership_tier }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);
export default {
  name: "all-cards",
  data() {
    return {
      id: this.$route.query.id,
      allCards: [],
    };
  },
  mounted() {
    this.getAllCard();
  },
  methods: {
    createCard() {
      this.$router.push({ name: "CreateCard", path: "/createCard" });
    },
    getAllCard() {
      Vue.axios
        .get("https://mocki.io/v1/6dcbbb3d-3487-4955-a0e7-33170e76c772")
        .then((response) => {
          this.allCards = response.data.filter(
            (row) => row.card_number == this.id
          );
        });
    },
  },
};
</script>
<style scoped>
.box {
  border: 1px solid gray;
  border-radius: 10px;
  /* width: 60%; */
  padding: 1rem;
  margin: 2rem;
}
.content,
.head {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.content span {
  font-weight: 800;
}
.btn {
  color: white;
  background: dodgerblue;
  border: 1px solid dodgerblue;
  height: 40px;
}
.btn:hover {
  border: 1px solid rgb(10, 70, 129);
}
</style>
