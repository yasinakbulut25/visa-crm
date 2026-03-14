import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectRightSidebarOpen } from "@/store/selectors/uiSelectors";
import CommunicationLogs from "./communications/CommunicationLogs";
import InternalNotes from "./notes/InternalNotes";
import ActionButton from "../button/ActionButton";
import { setRightSidebar } from "@/store/slices/uiSlice";
import { ArrowRight } from "@/icons";

function RightSidebar() {
  const isRightOpen = useSelector(selectRightSidebarOpen);
  const dispatch = useDispatch();

  return (
    <aside
      className={clsx(
        "w-78 h-full shrink-0 flex flex-col bg-white border-l border-border-default px-6 overflow-y-auto transition-all",
        "lg:relative lg:right-0 absolute top-0 z-50",
        isRightOpen ? "right-0" : "-right-78",
      )}
    >
      <ActionButton
        onPress={() => dispatch(setRightSidebar(false))}
        variant="light"
        className="lg:hidden flex text-left p-2 my-3 w-max h-max text-text-secondary"
        endContent={<ArrowRight width={20} height={20} color="#757575" />}
        aria-label="Close Right Sidebar"
      >
        Close
      </ActionButton>
      <InternalNotes />
      <CommunicationLogs />
    </aside>
  );
}

export default RightSidebar;
