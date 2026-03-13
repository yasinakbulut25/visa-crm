import Contact from "./contact/Contact";
import UserInfos from "./userInfos/UserInfos";

function ProfileSidebar() {
  return (
    <aside className="w-65 shrink-0 bg-white border-r border-border-default px-6 overflow-y-auto">
      <UserInfos />
      <Contact />
    </aside>
  );
}

export default ProfileSidebar;
