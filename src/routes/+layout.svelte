<script lang='ts'>
  import '../global.css'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
</svelte:head>
<!-- This is my app -->

<div id='app'>
  <slot></slot>
</div>