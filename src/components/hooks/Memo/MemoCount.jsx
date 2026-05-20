import { memo, useRef } from "react";
const Counts = memo(({ bioData }) => {
  const renderCount = useRef(0);
  return (
    <div>
      <h2>Memo Count</h2>
      <span className="text-red-600">{renderCount.current++} time(s)</span>
      <p>
        {bioData.name} - {bioData.city}
      </p>
    </div>
  );
});
export default memo(Counts);
