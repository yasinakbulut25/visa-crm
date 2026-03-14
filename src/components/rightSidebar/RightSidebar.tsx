import InternalNotes from "./notes/InternalNotes";

function RightSidebar() {
  return (
    <aside className="w-78 shrink-0 bg-white border-l border-border-default px-6 overflow-y-auto py-6">
      <div className="flex flex-col gap-1 mb-4">
        <h2 className="text-[20px] font-bold text-text-default leading-6">
          Internal Notes
        </h2>
        <p className="text-sm font-light text-text-secondary leading-5">
          Staff only - not visible to traveller
        </p>
      </div>

      <InternalNotes />
    </aside>
  );
}

export default RightSidebar;
