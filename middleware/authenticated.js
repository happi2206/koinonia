const Middleware = ({ store, redirect }) => {
  // Use context
  if (!store.getters['auth/isLoggedIn']) {
    return redirect('/auth/login')
  }
}

export default Middleware
