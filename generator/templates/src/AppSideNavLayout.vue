<template>
  <fd-shell>
    <fd-shell-header>
      <shell-bar />
    </fd-shell-header>
    <fd-app>
      <!-- inline style needed to work around a bug -->
      <fd-app-navigation style="min-width: 250px;" orientation="vertical">
        <fd-side-nav>
          <fd-side-nav-list :items="navigationItems">
            <template #item="item">
              <fd-side-nav-item>
                <fd-side-nav-link as-router-link :to="item.to">
                  <fd-side-nav-icon :icon="item.icon" />
                  {{ item.name }}
                </fd-side-nav-link>
              </fd-side-nav-item>
            </template>
          </fd-side-nav-list>
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
