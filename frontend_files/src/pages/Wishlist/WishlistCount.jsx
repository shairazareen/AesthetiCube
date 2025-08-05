// import React from "react";
// import { useWishlist } from "../../context/WishlistContext";

// const WishlistCount = () => {
//   const { wishlistItems } = useWishlist();
//   const count = wishlistItems.length;

//   if (count === 0) return null;

//   return (
//     <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-semibold">
//       {count}
//     </span>
//   );
// };

// export default WishlistCount;



// import React from "react";
// import { useWishlist } from "../../context/WishlistContext";

// const WishlistCount = () => {
//   const { wishlistItems } = useWishlist();
//   const count = wishlistItems.length;

//   if (count === 0) return null;

//   return (
//     <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-semibold">
//       {count}
//     </span>
//   );
// };

// export default WishlistCount;


// import React from "react";
// import { useWishlist } from "../../context/WishlistContext";

// const WishlistCount = () => {
//   const { wishlistItems } = useWishlist();
//   const count = wishlistItems.length;

//   if (count === 0) return null;

//   return (
//     <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-semibold">
//       {count}
//     </span>
//   );
// };

// export default WishlistCount;



import React from "react";
import { useWishlist } from "../../context/WishlistContext";

const WishlistCount = () => {
  const { wishlistItems } = useWishlist();
  const count = wishlistItems.length;

  if (count === 0) return null;

  return (
    <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-semibold z-10">
      {count}
    </span>
  );
};

export default WishlistCount;
