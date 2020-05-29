const router = {
  extendRoutes(routes: Object[], resolve: Function) {
    routes.push({
      name: 'Root',
      path: '/',
      component: resolve(__dirname, 'src/pages/Home/index.vue'),
    })
  },
}

export default router
