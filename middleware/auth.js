export default function ({ store, redirect }) {
  // Use context
  if (!store.getters['auth/authenticated']) {
    return redirect('/login')
  }
}
