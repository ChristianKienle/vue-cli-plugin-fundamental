<template>
  <FdShell>
      <FdShellHeader> <FdShellHeader>
      <FdShellBar>
        <FdShellBarGroup position="start">
          <FdShellBarLogo
            src="/images/product-logo.png"
            srcset="/images/product-logo.png 1x, /images/product-logo@2x.png 2x"
          />
          <FdShellBarProduct>Product Name</FdShellBarProduct>
        </FdShellBarGroup>
        <FdShellBarGroup position="end">
          <FdShellBarActions>
            <FdShellBarAction>
              <FdShellBarUserMenu>
                <FdMenuItem>Sign out</FdMenuItem>
              </FdShellBarUserMenu>
            </FdShellBarAction>
          </FdShellBarActions>
        </FdShellBarGroup>
      </FdShellBar>
    </FdShellHeader>
    </FdShellHeader>
      <FdApp>
        <FdAppNavigation orientation="vertical">
          <FdSideNav>
            <FdSideNavList :items="navigationItems" />
          </FdSideNav>
        </FdAppNavigation>
        <FdAppMain><router-view /></FdAppMain>
      </FdApp>
    </FdShell>
</template>

<script>
export default {
  name: "App",
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
