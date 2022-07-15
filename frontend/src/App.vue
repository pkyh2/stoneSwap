<template>
  <div class="container">
    <img class="stone" alt="" src="./assets/StoneEsgSwap.png">
    <div class="address">
      <span>0x4f8473a5b70bd48D3cC6400706595B4BbD261fdA</span>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style lang="less" scoped>
.container {
  position: relative;
  margin-top: 1%;
  width: 100%;
  
  // @media screen and(max-width:1024px) {
    //   margin-top: 1%;
  //   margin-left: 15%;
  //   margin-right: 15%;
  // }
  .stone {
    display: block;
    width: 860px; 
    margin: 0 auto;

  }
  
  .address {
    position: absolute;
  }

  @media screen and(max-width:400px) {
    width: 390px;
  }

}
</style>