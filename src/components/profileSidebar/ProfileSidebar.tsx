import UserInfos from "./userInfos/UserInfos";

function ProfileSidebar() {
  return (
    <aside className="w-65 shrink-0 bg-white border-r border-border-default p-6 overflow-y-auto">
      <UserInfos />
    </aside>
  );
}

export default ProfileSidebar;
