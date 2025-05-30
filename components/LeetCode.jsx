const TotalSolved = ({ easy, medium, hard }) => {
  return (
    <div className="stats shadow w-full">
      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-title text-info">Easy</div>
        <div className="stat-value text-info">{easy}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-title text-warning">Medium</div>
        <div className="stat-value text-warning">{medium}</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-title text-error">Hard</div>
        <div className="stat-value text-error">{hard}</div>
      </div>
    </div>
  );
};
export { TotalSolved };
