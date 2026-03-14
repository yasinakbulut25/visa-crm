import clsx from "clsx";
import RelatedApplications from "./applications/RelatedApplications";
import Contact from "./contact/Contact";
import UserInfos from "./userInfos/UserInfos";
import { useDispatch, useSelector } from "react-redux";
import { selectLeftSidebarOpen } from "@/store/selectors/uiSelectors";
import ActionButton from "../button/ActionButton";
import { ArrowLeft } from "@/icons";
import { setLeftSidebar } from "@/store/slices/uiSlice";

function ProfileSidebar() {
  const isLeftOpen = useSelector(selectLeftSidebarOpen);
  const dispatch = useDispatch();

  return (
    <aside
      className={clsx(
        "w-65 min-h-full shrink-0 bg-white border-r border-border-default px-6 overflow-y-auto transition-left",
        "lg:relative lg:left-0 absolute top-0 z-50",
        isLeftOpen ? "left-0" : "-left-65",
      )}
    >
      <ActionButton
        onPress={() => dispatch(setLeftSidebar(false))}
        variant="light"
        className="lg:hidden flex text-left p-2 my-3 w-max h-max text-text-secondary"
        startContent={<ArrowLeft width={20} height={20} color="#757575" />}
        aria-label="Close Left Sidebar"
      >
        Close
      </ActionButton>
      <UserInfos />
      <Contact />
      <RelatedApplications />
    </aside>
  );
}

export default ProfileSidebar;
