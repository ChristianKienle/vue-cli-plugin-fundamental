<template>
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
</template>
