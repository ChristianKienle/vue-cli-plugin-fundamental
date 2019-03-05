<template>
  <div id="app">
    <div v-padding:medium style="text-align: center;">
      <FdPanel title="Fundamental Vue">
        <p>
          You should see an
          <code>fd-button</code> below.
        </p>
        <FdButton v-margin:medium>FdButton</FdButton>

        <p slot="footer">Fundamental Vue is installed gobally. This means you can use any Fundamental Vue component without local registration.</p>
      </FdPanel>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
