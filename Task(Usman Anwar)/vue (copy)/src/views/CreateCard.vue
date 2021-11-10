<template>
  <div class="about">
    <h1>Create Cards</h1>
    <hr />
    <div style="display:flex; justify-content:center">
      <div class="box">
        <table class="table">
          <!-- <tr>
            <td><label for="">Card Number</label></td>
            <td>
              <span><input type="text" v-model="form.card_number"/></span>
            </td>
          </tr> -->
          <tr>
            <td><label for="">First Name</label></td>
            <td>
              <span><input type="text" v-model="form.first_name"/></span>
            </td>
          </tr>
          <tr>
            <td><label for="">Last Name</label></td>
            <td>
              <span><input type="text" v-model="form.last_name"/></span>
            </td>
          </tr>
          <tr>
            <td><label for="">Membership</label></td>
            <td>
              <span>
                <select v-model="form.membership_tier">
                  <option value="gold">Gold</option>
                  <option value="silver">Silver</option>
                  <option value="bronze">Bronze</option>
                </select>
              </span>
            </td>
          </tr>
          <tr>
            <td><label for="">Description</label></td>
            <td>
              <span>
                <textarea
                  v-model="form.description"
                  cols="30"
                  rows="6"
                ></textarea>
              </span>
            </td>
          </tr>
        </table>

        <hr />
        <div style="display:flex; justify-content:space-between">
          <button>
            <router-link to="/">Cancle</router-link>
          </button>
          <button :disabled="!form.card_number" @click="saveRow">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        card_number: "",
        first_name: "",
        last_name: "",
        membership_tier: "",
        description: "",
      },
    };
  },
  methods: {
    saveRow() {
      console.log(this.form);
    },
  },
};
</script>
<style scoped>
.table {
  width: 100%;
}
td {
  text-align: right;
}
td input,
td select {
  width: 100%;
}
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
  justify-content: center;
  align-items: center;
}
.content span {
  font-weight: 800;
  margin-left: 5px;
}
</style>
