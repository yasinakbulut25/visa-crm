import ProfileSidebar from "./components/profileSidebar/ProfileSidebar";

function MainLayout() {
  return (
    <div className="flex">
      <ProfileSidebar />

      <main className="flex-1 min-w-0 overflow-auto">...</main>

      <aside className="hidden xl:flex w-78 shrink-0">...</aside>
    </div>
  );
}

export default MainLayout;
