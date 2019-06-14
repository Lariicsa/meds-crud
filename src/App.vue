<template>
  <div id="app" class="container">
    <div class="content">
      <router-link :to="{name: 'inicio'}">
      <h1 class="title is-1">HoMeds</h1>
      <hr>
    </router-link>
    </div>
    <router-view/>
  </div>
</template>
