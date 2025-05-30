import MotionSection from "../components/MotionSection";
import Card from "../components/Card";

import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="grid place-items-center justify-center m-72">
      <MotionSection>
        <Card
          title="page not found"
          des="I can't find the address you are looking for"
        >
          <Link
            href="/"
            className="btn btn-secondary capitalize w-fit rounded-lg"
          >
            my homePage
            <FaArrowRight />
          </Link>
        </Card>
      </MotionSection>
    </div>
  );
}
