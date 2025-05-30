import GitHubCalendar from "react-github-calendar";

const Git = () => {
  return (
    <GitHubCalendar
      username="HirmaanR"
      year="last"
      blockMargin={4}
      blockRadius={2}
      blockSize={11}
      maxLevel={3}
      weekStart={6}
    />
  );
};
export default Git;
