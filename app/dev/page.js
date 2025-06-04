import MotionSection from "../../components/MotionSection";
import Dashbord from "../../components/Dashbord";
import Git from "../../components/Githubcalender";
import Card from "../../components/Card";

import { getData } from "./data";

export async function generateMetadata({ params }) {
  return {
    title: "Dev",
    description: "Hirmaan Rashidi Portfolio | dev Dashbord",
  };
}

export default async function Dev() {

  const data = await getData();
  return (
    <div>
      <MotionSection>
        {data === undefined ? (
          <div className="grid grid-cols-1 grid-rows-1 justify-center m-40 place-items-center">
            <Card title="github">
              <Git />
            </Card>
          </div>
        ) : (
          <Dashbord json={data} />
        )}
      </MotionSection>
    </div>
  );
}
