// import { Icon } from "@iconify/react";
// import { useState, useEffect } from "react";

// // Styles
// import { HeroSearchWrapper } from "./heroSearch.style";

// // Datepicker
// import { DateRangePicker } from "rsuite";
// import "rsuite/dist/rsuite.min.css";
// const styles = { width: 240, display: "block" };

// const options = [
//   { label: "1", id: 1 },
//   { label: "2", id: 2 },
//   { label: "3", id: 3 },
//   { label: "4", id: 4 },
//   { label: "5", id: 5 },
//   { label: "6", id: 6 },
// ];

// const HeroSearch = () => {
//   const [isShowing, setIsShowing] = useState(false);
//   const [isInputShowing, setIsInputShowing] = useState(false);
//   const [guestValue, setGuestValue] = useState();
//   const [roomValue, setRoomValue] = useState();

//   const handleChangeGuests = (e) => {
//     setGuestValue(e.target.guestValue);
//   };

//   const handleChangeRooms = (api) => {
//     setRoomValue(api.target.roomValue);
//   };

//   return (
//     <HeroSearchWrapper>
//       <div className="heroSearch">
//         <div className="heroSearch__container">
//           <span className="heroSearch__supportinghotel">Location</span>
//           <form>
//             {isInputShowing ? (
//               <input
//                 onChange={(e) => {
//                   setSearchText(e.target.value);
//                 }}
//               />
//             ) : (
//               <label
//                 className="heroSearch__inputName"
//                 onClick={() => setIsInputShowing(true)}
//               >
//                 Where are you going?
//               </label>
//             )}
//           </form>
//         </div>

//         <div className="heroSearch__container">
//           <span className="heroSearch__supportinghotel">Travelers</span>
//           <form>
//             <select
//               value={guestValue}
//               onChange={handleChangeGuests}
//               className="heroSearch__inputName"
//             >
//               <option>Add guests</option>
//               {options.map(({ id, label }) => {
//                 return (
//                   <option key={id} value={guestValue}>
//                     {label}
//                   </option>
//                 );
//               })}
//             </select>
//           </form>
//         </div>

//         <div className="heroSearch__container">
//           <span className="heroSearch__supportinghotel">Add date</span>
//           <form>
//             {isShowing ? (
//               <DateRangePicker
//                 size="md"
//                 placeholder="Select date"
//                 style={styles}
//               />
//             ) : (
//               <label
//                 className="heroSearch__inputName"
//                 onClick={() => setIsShowing(true)}
//               >
//                 Check in/out
//               </label>
//             )}
//           </form>
//         </div>

//         <div className="heroSearch__container">
//           <span className="heroSearch__supportinghotel">Rooms</span>
//           <form>
//             <select
//               value={roomValue}
//               onChange={handleChangeRooms}
//               className="heroSearch__inputName"
//             >
//               <option>Add rooms</option>
//               {options.map(({ id, label }) => {
//                 return (
//                   <option key={id} value={roomValue}>
//                     {label}
//                   </option>
//                 );
//               })}
//             </select>
//           </form>
//         </div>

//         <button className="heroSearch__button" type="submit" href="/hotels">
//           <Icon icon="charm:search" className="heroSearch__button--icon" />
//         </button>
//       </div>
//     </HeroSearchWrapper>
//   );
// };

// export default HeroSearch;
