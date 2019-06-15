<template>
  <fd-shell>
    <fd-shell-header>
      <shell-bar />
    </fd-shell-header>
    <fd-app>
      <!-- inline style needed to work around a bug -->
      <fd-app-navigation style="min-width: 250px;" orientation="vertical">
        <fd-side-nav mode="router">
          <fd-side-nav-list :items="navigationItems" />
        </fd-side-nav>
      </fd-app-navigation>
      <fd-app-main>
        <router-view />
      </fd-app-main>
    </fd-app>
  </fd-shell>
</template>

<script>
import ShellBar from "@/components/ShellBar.vue";

export default {
  name: "App",
  components: { ShellBar },
  data() {
    return {
      navigationItems: [
        { name: "Home", icon: "home", to: { name: "home" } },
        {
          name: "About",
          icon: "sap-logo-shape",
          to: { name: "about" }
        }
      ]
    };
  }
};
</script>
