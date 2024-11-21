// import MuiButtons from "./components/MuiButtons";
// import MuiTypography from "./components/MuiTypography";

import MuiTooltip from "./components/MuiTooltip";

// import MuiSwitch from "./components/MuiSwitch";

// import MuiAccordion from "./components/MuiAccordion";
// import MuiLayout from "./components/MuiLayout";

// Feedback
// import MuiProgress from "./components/MuiProgress";
// import MuiSkeleton from "./components/MuiSkeleton";

// interface IPerson {
//   name: string;
//   rank: number;
//   setRank?: (rankNumber: number) => number;
// }

function App() {
  // const personOne: IPerson = {
  //   name: "Ali",
  //   rank: 1,
  //   setRank(rankNumber: number) {
  //     return this.rank = rankNumber;
  //   },
  // };

  // const personTwo : IPerson= {
  //   name: "Mohamed",
  //   rank: 1,
  // };


  // console.log(personTwo.rank)
  // personOne.setRank?.call(personTwo,10)
  // const bindFn = personOne.setRank?.bind(personOne,100) // 
  // console.log(personTwo.rank)


  return (
    <>
      {/* <MuiTypography /> */}
      {/* <MuiButtons /> */}
      {/* <MuiLayout /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiSkeleton/> */}
      {/* <MuiProgress /> */}
      {/* <MuiAccordion/> */}
      <MuiTooltip/>
    </>
  );
}

export default App;
