import { useSelector } from "react-redux";
import Stage from "./Stage";
import { selectStages } from "@/store/selectors/applicationSelectors";

function ProgressTracker() {
  const stages = useSelector(selectStages);

  return (
    <section className="w-full flex items-start  justify-between gap-3 bg-color-light p-6 border-b border-border-default overflow-x-auto">
      {stages.length > 0 ? (
        stages.map((stage) => <Stage key={stage.key} stage={stage} />)
      ) : (
        <h2 className="text-xl text-text-secondary font-semibold text-center w-full">
          Stage Proggress Could Not Found
        </h2>
      )}
    </section>
  );
}

export default ProgressTracker;
