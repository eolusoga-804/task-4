// This file centralizes storefront copy and catalog settings.
export const storeContent = {
  brand: "Emmanuel#804 Online Store",
  announcement: "A little joy for your everyday essentials!",

  api: {
    productsUrl: "https://fakestoreapi.com/products",
  },

  header: {
    homeLabel: "Home",
    catalogLabel: "Shop all",
    cartLabel: "Your bag",
    cartCountLabel: "Items in bag",
  },

  hero: {
    eyebrow: "GOOD FINDS, GOOD FEELING",
    title: "Everyday things, with a little extra.",
    description:
      "Thoughtful picks across the pieces you wear, use, and keep close.",
    actionLabel: "Explore the collection",
    note: "A considered edit of customer-loved finds",
  },

  catalog: {
    title: "The good finds",
    description: "Browse the latest pieces in our collection.",
    loadingMessage: "Finding your next favorite…",
    errorMessage: "We couldn't load the collection. Please try again.",
    emptyMessage: "No products match those choices.",
    searchLabel: "Search products",
    searchPlaceholder: "Try a name or keyword",
    categoryLabel: "Filter by category",
    sortLabel: "Sort products",
    categories: [
      { id: "all", label: "All finds" },
      { id: "electronics", label: "Electronics" },
      { id: "jewelery", label: "Jewelry" },
      { id: "clothing", label: "Clothing" },
    ],
    sortOptions: [
      { id: "featured", label: "Featured" },
      { id: "price-ascending", label: "Price: low to high" },
      { id: "price-descending", label: "Price: high to low" },
      { id: "rating", label: "Top rated" },
    ],
    currencyLocale: "en-US",
    currencyCode: "USD",
    ratingLabel: "Rating",
    favoriteBadge: "Customer favorite",
    addToBagLabel: "Add to bag",
  },

  footer: {
    copyright: "Made for curious collectors.",
  },

  cart: {
    storageKey: "emmanuel804-cart",
    taxRate: 0.08,
    shippingThreshold: 75,
    shippingFee: 6.99,
    title: "Your bag",
    closeLabel: "Close cart",
    emptyMessage: "Your bag is waiting for a good find.",
    itemsPresentMessage: "Your bag has {{count}} items.",
    removeLabel: "Remove",
    decreaseQuantityLabel: "Decrease quantity for {{title}}",
    increaseQuantityLabel: "Increase quantity for {{title}}",
    subtotalLabel: "Subtotal",
    shippingLabel: "Shipping",
    taxLabel: "Estimated tax",
    totalLabel: "Total",
    freeLabel: "Free",
  },

  checkout: {
    title: "Complete your order",
    description: "Demo checkout only. No payment details are collected.",
    nameLabel: "Name",
    emailLabel: "Email address",
    submitLabel: "Place demo order",
    confirmationTitle: "Your order is confirmed!",
    confirmationMessage: "Thanks for shopping with us. Your order number is:",
    orderNumberLabel: "Order number",
    continueLabel: "Continue shopping",
    closeLabel: "Close checkout",
  },
};
