<template>
  <div class="home">
    <h1>Vue Books PWA</h1>
    <h2>Une application web simple et progressive</h2>
    <p>Vous pouvez rechercher un livre</p>
    <router-link to="/search" class="btn-search">Rechercher</router-link>
  </div>
</template>
<style>
  h2 {
    margin-left: 20px;
    margin-bottom: 30px;
  }
  p {
    font-size: 20px;
    margin-bottom: 30px;
    margin-left: 20px;
  }
  a.btn-search {
    margin-left: 20px;
    background-color: #212121;
    color: white !important;
    font-size: 20px;
    padding: 5px 20px 5px 20px;
    border-radius: 5px;
    text-decoration: none;
  }
  a.btn-search:hover {
    background-color: #212121;
    color: white;
  }
</style>