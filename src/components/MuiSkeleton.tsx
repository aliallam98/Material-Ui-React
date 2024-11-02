import { Skeleton } from "@mui/material";

const MuiSkeleton = () => {
  // Default => Text
  // variant
  // animation
  console.log([...Array.from({ length: 4 })]);
  return (
    <>
      {/* <Skeleton variant="text" width={200} height={100} animation="pulse" />
      <Skeleton variant="rounded" width={210} height={60} animation="wave" />

      <Skeleton variant="circular" width={40} height={40} animation="pulse" />
      <Skeleton
        variant="rectangular"
        width={210}
        height={60}
        animation="wave"
      /> */}

      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width={200}
          height={100}
          animation="wave"
        />
      ))}
    </>
  );
};

export default MuiSkeleton;
