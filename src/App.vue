<template>
  <div id="app" class="container">
    <router-link :to="{name: 'inicio'}">
      <h1>HoMeds</h1>
      <hr>
    </router-link>
    <router-view/>
  </div>
</template>
