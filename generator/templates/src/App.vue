<template>
  <div id="app">
    <div v-padding:medium style="text-align: center;">
      <fd-panel title="Fundamental Vue">
        <p>
          You should see an
          <code>fd-button</code> below.
        </p>
        <fd-button v-margin:medium>fd-button</fd-button>

        <p slot="footer">Fundamental Vue is installed gobally. This means you can use any Fundamental Vue component without local registration.</p>
      </fd-panel>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
