import { useSelector } from "react-redux";
import { selectInternalNotes } from "@/store/selectors/applicationSelectors";
import AddNote from "./AddNote";
import { timeAgoShort } from "@/utils";

function InternalNotes() {
  const internalNotes = useSelector(selectInternalNotes);

  return (
    <div className="flex flex-col gap-6 border-b border-border-default pb-4 lg:pt-6 pt-0">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-[20px] font-bold text-text-default leading-6">
            Internal Notes
          </h2>
          <p className="text-sm font-light text-text-secondary leading-5">
            Staff only - not visible to traveller
          </p>
        </div>
        <AddNote />
      </div>

      <div className="flex flex-col">
        {internalNotes.map((note) => {
          const timeAgo = timeAgoShort(note.createdAt);

          return (
            <div
              key={note.id}
              className="border-b border-border-default/30 last:border-b-0 py-2 last:pb-0"
            >
              <div className="flex items-center justify-between gap-1">
                <p className="text-sm text-text-default font-semibold leading-6">
                  {note.author}
                </p>
                <span className="text-xs text-text-secondary font-normal leading-5">
                  {timeAgo}
                </span>
              </div>
              <p className="text-sm text-text-secondary font-light leading-5">
                {note.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InternalNotes;
