import "./skeletonLoading.scss";
const SkeletonLoading = ({ width, height, rounded }) => {
  return (
    <div
      style={{
        width: width || "100%",
        height: height || "100%",
        borderRadius: rounded || "4px",
      }}
      className="skeleton-box"
    ></div>
  );
};
export default SkeletonLoading;
