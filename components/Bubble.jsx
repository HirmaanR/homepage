const Bubble = ({ title, url, children }) => {
  return (
    <>
      <a
        href={url}
        role="button"
        className="btn rounded-lg btn-soft btn-secondary w-fit font-medium m-1"
      >
        {children}
        {title}
      </a>
    </>
  );
};

export default Bubble;
