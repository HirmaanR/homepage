const Card = ({ title, des, children }) => {
  return (
    <>
      <div className="card card-border bg-base-200 rounded-lg w-96 lg:w-2xl my-3 shadow-md">
        <div className="card-body">
          <h2 className="card-title capitalize font-bold underline text-primary text-xl lg:text-2xl">
            {title}
          </h2>
          <p className="font-medium text-md lg:text-lg">{des}</p>
          {children}
        </div>
      </div>
    </>
  );
};
export default Card;
