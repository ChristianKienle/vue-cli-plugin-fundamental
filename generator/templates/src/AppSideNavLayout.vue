<template>
  <FdShell>
    <FdShellHeader><ShellBar /></FdShellHeader>
    <FdApp>
      <FdAppNavigation orientation="vertical">
        <FdSideNav>
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
import ShellBar from '@/components/ShellBar.vue'

export default {
  name: "App",
  components: { ShellBar },
  data() {
    return {
      navigationItems: [
        { id: "home", name: "Home", icon: "home", to: { name: "home" } },
        {
          id: "about",
          name: "About",
          icon: "sap-logo-shape",
          to: { name: "about" }
        }
      ]
    };
  }
};
</script>
