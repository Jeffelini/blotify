<template>
    <div id="welcome">
        <h1>Welcome to Blotify</h1>
        <h3>Blotify helps to create playlists with explicit songs<br/>
            replaced with non-explicit versions of the song<br/> where possible.</h3>
        <button id="sign-in">sign-in</button>
    </div>
</template>

<script>
export default {
  name: "Home"
  //   props: {
  //     msg: String
  //   }
};
</script>

<style style lang="scss" scoped>
#welcome {
  display: flex;
  flex-direction: column;
  //   flex-wrap: nowrap;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
}

button {
  align-content: center;
  text-align: center;
  font-size: 20px;
  background-color: green;
  border: none;
  color: white;
  padding: 15px 25px;
  border-radius: 4px;
  width: 200px;
}

button:hover {
  background-color: darkgreen;
}
</style>
