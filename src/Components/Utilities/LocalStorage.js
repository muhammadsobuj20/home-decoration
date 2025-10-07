import Swal from "sweetalert2";

// 📦 Load wishlist
export const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Error loading wishlist:", err);
    return [];
  }
};

// ➕ Add to wishlist
export const updateList = (product) => {
  if (!product) return;

  const wishlist = loadWishlist();

  try {
    const isDuplicate = wishlist.some((p) => p.id === product.id);
    if (isDuplicate)
      return Swal.fire({
        icon: "info",
        title: "Already Added",
        text: `${product.name} is already in your wishlist!`,
      });

    const updatedWishlist = [...wishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    Swal.fire({
      icon: "success",
      title: "Added to Wishlist",
      text: `${product.name} added successfully!`,
      timer: 1500,
      showConfirmButton: false,
    });
  } catch (err) {
    console.error("Error updating wishlist:", err);
  }
};

// ❌ Remove from wishlist
export const removeFromWishlist = (id) => {
  const wishlist = loadWishlist();
  try {
    const updatedWishlist = wishlist.filter((p) => p.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    Swal.fire({
      icon: "success",
      title: "Removed!",
      text: "Product removed from wishlist.",
      timer: 1200,
      showConfirmButton: false,
    });
  } catch (err) {
    console.error("Error removing wishlist item:", err);
  }
};
