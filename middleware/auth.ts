export default function ({ store, redirect }: { store: any; redirect: any }) {
  // If the user is not authenticated
  if (!store.state.user.user) {
    return redirect("/login");
  }
}
