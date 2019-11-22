<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/scroll/linkage">scroll</router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
        name:'Home',
        data(){
            return {

            }
        },
       created(){
         let html = document.getElementsByTagName('html')[0];
        let rem = html.offsetWidth <= 750 ? html.offsetWidth / 3.75 : 100;
        html.style.fontSize = rem + "px";
       }
    }
</script>
<style lang="stylus">
  @import "./assets/style/reset.css";
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50 
  width 100%
  height 100%
#nav
  position:fixed
  bottom:0
  left:0
  height:.5rem
  width :100%
  line-height:.5rem
  display:flex
  justify-content:flex-start
  background:violet;
  
  a
    width:50%
    color:#2c3e50
    text-align:center
    &.router-link-exact-active
      color #fff
</style>
