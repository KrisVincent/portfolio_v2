// import React, { useEffect } from "react";
// import $ from "jquery";

// function SkillBar() {
//   useEffect(() => {
//     if (typeof document !== undefined) {
//       $(".progress-bar").animate(
//         {
//           width: "50%",
//         },
//         2500
//       );
//     }
//   }, []);

//   return (
//     <div class="progress progress-striped active">
//       <div
//         class="progress-bar progress-bar-success"
//         style={{ width: "0%" }}
//       ></div>
//     </div>
//   );
// }

// export default SkillBar;

// import dynamic from 'next/dynamic'
// import { Suspense } from 'react'

// const DynamicHeader = dynamic(() => import('../components/header'), {
//   suspense: true,
// })

// export default function Home() {
//   return (
//     <Suspense fallback={`Loading...`}>
//       <DynamicHeader />
//     </Suspense>
//   )
// }

import React from 'react'
import ProgressBar from "react-animated-progress-bar"


function SkillBar() {
  return (
    <ProgressBar
    width="400px"
    height="10px"
    rect
    fontColor="gray"
    percentage="100"
    rectPadding="1px"
    rectBorderRadius="20px"
    // trackPathColor="transparent"
    bgColor="#333333"
    trackBorderColor="grey"
  />
  )
}

export default SkillBar
