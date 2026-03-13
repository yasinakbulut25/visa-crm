import { useSelector } from "react-redux";
import StatusBadge from "./StatusBadge";
import { selectRelatedApplications } from "@/store/selectors/applicationSelectors";

function RelatedApplications() {
  const relatedApplications = useSelector(selectRelatedApplications);

  return (
    <div className="flex flex-col gap-3 py-6">
      <h4 className="text-sm text-text-secondary font-light leading-6 uppercase">
        Related Applications
      </h4>
      {/* index was used for the key due to a conflict in the app.id values. */}
      {relatedApplications.map((app, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex items-center justify-between gap-1">
            <p className="text-text-default text-sm font-semibold leading-6">
              {app.id}
            </p>
            <StatusBadge variant={app.status} />
          </div>
          <p className="text-text-secondary text-sm font-light leading-6">
            {app.type}
          </p>
          <p className="text-text-secondary text-sm font-light leading-6">
            {app.period}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RelatedApplications;
