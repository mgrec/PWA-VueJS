<template>
  <div class="home">
    <h1>Book search application</h1>
    <h2>A simple and progressive web application</h2>
    <p>You can search for a book by searching for its title</p>
    <router-link to="/search" class="btn-search">Search a book</router-link>
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
  .btn-search {
    margin-left: 20px;
    background-color: aquamarine;
    color: white;
    font-size: 20px;
    padding: 5px;
    border-radius: 5px;
    text-decoration: none;
  }
</style>