import NetflixLoader from "../ui/skeleton";
const Loader = () => {
  return new Array(19).fill(0).map((e) => (
    <div style={{ marginTop: "10rem" }}>
      <NetflixLoader showReact={true} />
    </div>
  ));
};
export default Loader;
