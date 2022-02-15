export default function ({ app, redirect }) {
  if (
    app.$localStorage.get('KOINONIA-TOKEN') === undefined ||
    app.$localStorage.get('KOINONIA-LOGIN-STATE') === undefined
  ) {
    app.$localStorage.removeAll()
    redirect('/login')
  }
}
