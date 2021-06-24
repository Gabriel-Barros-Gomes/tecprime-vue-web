<template>
<div>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/sign">Cadastre-se</router-link> |
    <router-link to="/login">Entrar</router-link> |
  </div>

  <div id="canvas">
    <router-view/>
  </div>

</div>
</template>

