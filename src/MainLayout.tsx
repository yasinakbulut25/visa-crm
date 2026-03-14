import DocumentsWrapper from "@/components/documents/DocumentsWrapper";
import ProfileSidebar from "@/components/profileSidebar/ProfileSidebar";
import RightSidebar from "./components/rightSidebar/RightSidebar";

function MainLayout() {
  return (
    <div className="flex gap-4">
      <ProfileSidebar />

      <main className="flex-1 min-w-0 overflow-auto">
        <DocumentsWrapper />
      </main>

      <RightSidebar />
    </div>
  );
}

export default MainLayout;
