<template>

<!-- UI + LOGIC TO SWITCH BETWEEN USERS -->
  <div v-if="loading" class="loading-screen">
    <h1> Who are you?</h1>
    <div class="button-flex">
      <button v-for="(user, index) in users" :key="index + user.user_token" @click="userToken = user.user_token; loading = false">
        {{ user.display_name }}
      </button>
    </div>
  </div>

<!-- ROBIN CHAT SDK MOUNT -->
  <RobinChat
      v-else
      :api-key="apiKey"
      :users="users"
      :user-token="userToken"
      :keys="keys"
      :user-name="username"
  />
</template>

<script>
import 'robin-vue/dist/style.css'
export default {
  name: 'App',
  data () {
    return {
      loading: true,
      apiKey: 'NT-rfPsrKRZzDELEOqkdtylzSwIDQXbPYTVxjpq',
      userToken: 'IdpOUFNKJFPkkCypFJgSOfDN',
      users: [
        {display_name:"Favour Felix", username:"favour", user_token:"TzoHlzMWPEoNryHDjWKriZKP"},
        {display_name:"Ayo Onasanya", username:"ayo", user_token:"OrCAIzicycBCBlgzzKjyPBFt"},
        {display_name:"Temitope Akinlabi", username:"tope", user_token:"FtIthzBmpCkKbvIHMBWKbhiQ"},
        {display_name:"Precious Ogar", username:"precious", user_token:"IoqeRSUquhhSVGoTMoYaVJew"}
      ],
      keys: {
        userToken: 'user_token',
        userName: 'username'
      },
      username: 'favour',
    }
  }
}
</script>

<style>
.loading-screen {
  display: grid;
  place-items: center;
  font-family: 'Arial';
  padding-top: 15%;
}
.button-flex {
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  justify-content: space-between;
  margin-top: 10%;
}
.button-flex > button {
  border-radius: 16px;
  border: 0;
  background: #42b983;
  color: cornsilk;
  width: 235px;
  padding: 24px;
  font-size: 1.2rem;
  margin-bottom: 5%;
  cursor: pointer;
  transition: 0.5s;
}
.button-flex > button:hover {
  transform: scale(1.1);
}
</style>
