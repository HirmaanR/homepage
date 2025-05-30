import Card from "./Card";
import Git from "./Githubcalender";
import { TotalSolved } from "./LeetCode";
import Bubble from "./Bubble";

const Dashbord = ({ json }) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-primary">
          Dev Dashbord
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Everything you need to know about me and code
        </p>
        <div className="mt-10 grid grid-cols-1 justify-center gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-base-200 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 underline text-lg font-bold text-primary tracking-tight max-lg:text-center">
                  TotalSolved
                </p>
                <p className="mt-2 text-sm tracking-tight max-lg:text-center">
                  you can see my{" "}
                  <a href="https://leetcode.com/u/HirmanR/" className="link">
                    LeetCode
                  </a>{" "}
                  account here
                </p>
                <div className="badge badge-soft w-full badge-lg capitalize font-bold badge-secondary rounded-lg my-2 text-2xl p-5">
                  <p>
                    {json.totalSolved}
                    <span className="text-xs">solved</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <TotalSolved
                  easy={json.easySolved}
                  medium={json.mediumSolved}
                  hard={json.hardSolved}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-1 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-base-200"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 py-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg underline font-bold text-primary tracking-tight max-lg:text-center">
                  Other
                </p>
                <div className="grid lg:grid-cols-2 gap-4">
                  <div className="stats">
                    <div className="stat bg-base-300 rounded-lg my-2">
                      <div className="stat-title">Ranking</div>
                      <div className="stat-value text-primary">
                        {json.ranking}
                      </div>
                    </div>
                  </div>
                  <div className="stats">
                    <div className="stat bg-base-300 rounded-lg my-2">
                      <div className="stat-title">Submissions</div>
                      <div className="stat-value text-secondary">
                        {json.totalSubmissions[0].submissions}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2 lg:col-span-1">
            <div className="absolute inset-px rounded-lg bg-base-200"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-bold text-primary tracking-tight max-lg:text-center underline">
                  Github
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <Git />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashbord;
