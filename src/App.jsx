import LoginForm from "./components/LoginForm";


export default function App() {
  window.addEventListener("resize",  () => {
    console.log(window.innerHeight, window.innerWidth)
  })
  return (
    <div>
      <LoginForm/>
    </div>
  )
}

// export default function App() {
//   const isAuthenticated = true;

//   // using ternary operators

//   return isAuthenticated ? ( 
//     <div>
//       <h1>Welcome, User!</h1>
//     </div>
//   ) : (
//     <div>
//       <h1>You are not Logged In!</h1>
//     </div>
//   );

//   // using if-else blocks

//   // if (isAuthenticated) {
//   //   return (
//   //     <div>
//   //       <h1>Welcome, User!</h1>
//   //     </div>
//   //   );
//   // }
//   // return (
//   //   <div>
//   //     <span>You are not Logged In!</span>
//   //   </div>
//   // );
// }
