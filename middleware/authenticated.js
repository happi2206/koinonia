const Middleware = ({ store, redirect }) => {
  // Use context
  if (!store.getters['auth/authenticated']) {
    return redirect('/auth/login')
  }
}

export default Middleware
