<template>
  <div id="app" class="container">
    <div id="nav"><router-link to="/">app</router-link> |</div>

    <!--<router-view />-->
    <!-- the language changer-->
    <trans-movie />
    <HelloI18n />
  </div>
</template>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main-doc {
  position: absolute;
  margin-left: 310px;
  padding: 20px;
  margin-bottom: 110px;
}
</style>

<script>
// @ is an alias to /src
import HelloI18n from "@/components/HelloI18n.vue";

export default {
  name: "App",
  components: {
    HelloI18n
  }
};
</script>
