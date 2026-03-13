import {
  selectApplicationType,
  selectTraveler,
} from "@/store/selectors/applicationSelectors";
import { useSelector } from "react-redux";
import AppointmentDate from "./AppointmentDate";

function UserInfos() {
  const {
    name,
    initials,
    applicationLabel,
    traveler_id: travelerID,
    passportNumber,
  } = useSelector(selectTraveler);
  const applicationType = useSelector(selectApplicationType);

  return (
    <div className="flex flex-col gap-3 border-b border-border-default pb-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-color-neutral rounded-full text-lg text-white uppercase">
          {initials}
        </div>
        <div className="flex flex-col">
          <h3 className="text-text-default font-bold text-xl">{name}</h3>
          <p className="text-text-secondary font-light text-sm">
            {applicationLabel}
          </p>
        </div>
      </div>

      <AppointmentDate />

      <div className="flex flex-col">
        <h4 className="text-sm text-text-secondary font-light leading-6 uppercase">
          ID
        </h4>
        <p className="text-sm text-text-default font-medium leading-6">
          {travelerID}
        </p>
      </div>

      <div className="flex flex-col">
        <h4 className="text-sm text-text-secondary font-light leading-6 uppercase">
          PassPort
        </h4>
        <p className="text-sm text-text-default font-medium leading-6">
          {passportNumber}
        </p>
      </div>

      <div className="flex flex-col">
        <h4 className="text-sm text-text-secondary font-light leading-6 uppercase">
          Application Type
        </h4>
        <p className="text-sm text-text-default font-medium leading-6">
          {applicationType}
        </p>
      </div>
    </div>
  );
}

export default UserInfos;
