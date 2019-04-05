<template>
  <FdShell>
    <FdShellHeader>
      <ShellBar />
    </FdShellHeader>
    <FdApp>
      <FdAppNavigation orientation="vertical">
        <FdSideNav mode="router">
          <FdSideNavList :items="navigationItems" />
        </FdSideNav>
      </FdAppNavigation>
      <FdAppMain>
        <router-view />
      </FdAppMain>
    </FdApp>
  </FdShell>
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
