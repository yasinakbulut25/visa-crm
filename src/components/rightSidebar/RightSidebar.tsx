import CommunicationLogs from "./communications/CommunicationLogs";
import InternalNotes from "./notes/InternalNotes";

function RightSidebar() {
  return (
    <aside className="w-78 shrink-0 flex flex-col gap-6 bg-white border-l border-border-default px-6 overflow-y-auto py-6">
      <InternalNotes />
      <CommunicationLogs />
    </aside>
  );
}

export default RightSidebar;
