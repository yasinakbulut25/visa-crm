import ActionButton from "@/components/button/ActionButton";
import InputField from "@/components/input/Input";
import { Send } from "@/icons";
import { addInternalNote } from "@/store/slices/applicationSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function AddNote() {
  const dispatch = useDispatch();
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    if (!note.trim()) return;

    dispatch(
      addInternalNote({
        author: "You",
        content: note.trim(),
      }),
    );

    setNote("");
  };

  const isActive = note.trim().length > 0;

  return (
    <div className="flex items-center gap-2">
      <InputField
        placeholder="Add a note..."
        maxLength={200}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <ActionButton
        onPress={handleSubmit}
        isIconOnly
        className={`w-11 h-11 shrink-0 transition-colors ${
          isActive ? "bg-color-primary" : "bg-[#CDCDCD]"
        }`}
        aria-label="Add Note"
      >
        <Send width={20} height={20} color={isActive ? "#000" : "#757575"} />
      </ActionButton>
    </div>
  );
}

export default AddNote;
