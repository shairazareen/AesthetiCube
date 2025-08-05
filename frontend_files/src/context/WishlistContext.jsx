// // src/context/WishlistContext.jsx
// import React, { createContext, useContext, useEffect, useState } from "react";

// const WishlistContext = createContext();

// export const useWishlist = () => useContext(WishlistContext);

// export const WishlistProvider = ({ children }) => {
//   const [wishlistItems, setWishlistItems] = useState([]);

//   // Load from localStorage on mount
//   useEffect(() => {
//     const stored = localStorage.getItem("wishlist");
//     if (stored) setWishlistItems(JSON.parse(stored));
//   }, []);

//   // Sync to localStorage
//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
//   }, [wishlistItems]);

//   const addToWishlist = (item) => {
//     if (!wishlistItems.find((i) => i.name === item.name)) {
//       setWishlistItems([...wishlistItems, item]);
//     }
//   };

//   const removeFromWishlist = (itemName) => {
//     setWishlistItems(wishlistItems.filter((item) => item.name !== itemName));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };


// import React, { createContext, useContext, useEffect, useState } from "react";

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlistItems, setWishlistItems] = useState([]);

//   // Load from localStorage on mount
//   useEffect(() => {
//     const storedWishlist = localStorage.getItem("wishlist");
//     if (storedWishlist) {
//       setWishlistItems(JSON.parse(storedWishlist));
//     }
//   }, []);

//   // Save to localStorage when it changes
//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
//   }, [wishlistItems]);

//   // const addToWishlist = (item) => {
//   //   if (!wishlistItems.some((i) => i.id === item.id)) {
//   //     setWishlistItems([...wishlistItems, item]);
//   //   }
//   // };

//   const addToWishlist = (item) => {
//   // Avoid duplicates by checking product ID + image URL
//   const exists = wishlistItems.some(
//     (i) => i.id === item.id && i.image === item.image
//   );
//   if (!exists) {
//     setWishlistItems([...wishlistItems, item]);
//   }
// };


//   const removeFromWishlist = (itemId) => {
//     setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);




// import React, { createContext, useContext, useEffect, useState } from "react";

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlistItems, setWishlistItems] = useState([]);

//   // Load from localStorage on mount
//   useEffect(() => {
//     const storedWishlist = localStorage.getItem("wishlist");
//     if (storedWishlist) {
//       setWishlistItems(JSON.parse(storedWishlist));
//     }
//   }, []);

//   // Save to localStorage when wishlistItems change
//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
//   }, [wishlistItems]);

//   const addToWishlist = (item) => {
//     // Avoid duplicates by checking product ID + image URL
//     const exists = wishlistItems.some(
//       (i) => i.id === item.id && i.image === item.image
//     );
//     if (!exists) {
//       setWishlistItems([...wishlistItems, item]);
//     }
//   };

//   const removeFromWishlist = (itemId) => {
//     setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);



import React, { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(stored);
  }, []);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // In your WishlistContext.jsx
const addToWishlist = (item) => {
  if (!wishlistItems.some((i) => i.id === item.id)) {
    // Ensure the image URL is properly included
    const itemWithImage = {
      ...item,
      image: item.image || item.imageUrl || item.img || null
    };
    setWishlistItems([...wishlistItems, itemWithImage]);
  }
};

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((i) => i.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
