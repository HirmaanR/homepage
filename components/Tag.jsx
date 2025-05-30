const Tag = ({ title, des }) => {
  return (
    <>
      <div className="flex flex-row ml-3 items-center my-2">
        <div className="badge badge-secondary rounded-sm uppercase badge-sm lg:badge-md font-bold">
          {title}
        </div>
        <p className="m-1 text-sm font-light">{des}</p>
      </div>
    </>
  );
};
export default Tag;
