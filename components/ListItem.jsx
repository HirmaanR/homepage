import Image from "next/image";
import Link from "next/link";

const ListItem = ({ id, title, des, img }) => {
  return (
    <div className="card bg-base-200 w-96 shadow-md rounded-lg">
      <figure>
        <Image src={img} width={500} height={500} alt="project picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize text-primary">{title}</h2>
        <p>{des}</p>
        <div className="card-actions justify-center">
          <Link
            href={"projects/" + id}
            className="btn btn-soft btn-wide btn-secondary rounded-lg"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ListItem;
