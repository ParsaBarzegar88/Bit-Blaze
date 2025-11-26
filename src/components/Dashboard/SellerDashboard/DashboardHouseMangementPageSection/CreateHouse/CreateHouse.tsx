import React from "react";
import MultiSteps from "./MultiSteps/MultiSteps";
// import CreateHouseBreadcrumb from "./CreateHouseBreadcrumb/CreateHouseBreadcrumb";
import { cookies } from "next/headers";

const CreateHouse = async () => {
  const cookieStore = await cookies();
  const house = cookieStore.get("House")?.value;
  let houseData;
  if (house) {
    houseData = JSON.parse(house);
  }
  return (
    <div className="w-full mx-auto">
        <MultiSteps/>
    </div>
  );
};

export default CreateHouse;
