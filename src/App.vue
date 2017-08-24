<template>
  <div id="app">
     <!--  <Vheader></Vheader>
      <div class="tab">
        i am tab
      </div>
      <div class="content">
          i am content
      </div> -->
      <router-view></router-view>

      <router-link :to="'apple'" tag="li">to apple</router-link>
      <router-link :to="{name:'applePage'}">to banane</router-link>
      <router-link :to="{path:'apple/red'}">to redApple</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
    // import Vheader from './components/header/header';
    export default { 
      name:'app',
      data () {

      },
      components: {
        // Vheader,
      }
    }
</script>

<style>
  

</style>

