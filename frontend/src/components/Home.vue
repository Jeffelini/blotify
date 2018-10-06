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
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#welcome {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
}

h1 {
  opacity: 0;

  animation-name: fadeIn;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

h3 {
  opacity: 0;

  animation-name: fadeIn;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
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
  opacity: 0;
  margin-top: 20px;

  animation-name: fadeIn;
  animation-duration: 2s;
  animation-delay: 5s;
  animation-fill-mode: forwards;
}

button:hover {
  background-color: darkgreen;
}
</style>
