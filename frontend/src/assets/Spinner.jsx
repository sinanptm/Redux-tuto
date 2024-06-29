import React from "react";
import { BeatLoader } from "react-spinners";

const Spinner = () => (
  <div className="flex items-center justify-center mt-4">
    <BeatLoader color="#4A90E2" loading={true} size={15} />
  </div>
);

export default Spinner;
