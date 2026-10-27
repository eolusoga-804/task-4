// This file centralizes storefront copy and catalog settings.
export const storeContent = {
  brand: "Emmanuel#804 Online Store",
  announcement: "A little joy for your everyday essentials!",

  api: {
    productsUrl: "https://fakestoreapi.com/products",
  },

  // This block keeps header and cart wording in the central store configuration.
  header: {
    cartLabel: "Your cart",
    cartCountLabel: "Items in cart",
  },

  hero: {
    eyebrow: "GOOD FINDS, GOOD FEELING",
    // These title parts let the hero emphasize its final phrase.
    titleLead: "Everyday things, with ",
    titleAccent: "a little extra.",
    description:
      "Thoughtful picks across the pieces you wear, use, and keep close.",
    actionLabel: "Explore the collection",
    note: "A considered edit of customer-loved finds",
    // These lines provide a short label for the hero artwork.
    artLabelTop: "GOOD FINDS",
    artLabelBottom: "FOUND DAILY",
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
    // This label appears on each product card's add button.
    addToCartLabel: "Add to cart",
    loadingLabel: "Loading the collection",
    loadingMessages: [
      "Checking the shelves…",
      "Picking out the good ones…",
      "Almost ready…",
    ],
    retryLabel: "Try again",
    // This label follows the live number of matching products.
    resultsCountLabel: "products",
  },

  // This block centralizes footer copy and its background watermark.
  footer: {
    creatorLabel: "Created, constructed, built, developed by",
    creatorName: "Emmanuel#804",
    copyright: "Made for curious collectors.",
    watermark: "EMMANUEL#804 ONLINE STORE",
  },

  // This block centralizes the cart drawer's customer-facing copy.
  cart: {
    storageKey: "emmanuel804-cart",
    taxRate: 0.08,
    shippingThreshold: 75,
    shippingFee: 6.99,
    title: "Your cart",
    closeLabel: "Close cart",
    emptyMessage: "Your cart is waiting for a good find.",
    itemsPresentMessage: "Your cart has {{count}} items.",
    removeLabel: "Remove",
    decreaseQuantityLabel: "Decrease quantity for {{title}}",
    increaseQuantityLabel: "Increase quantity for {{title}}",
    subtotalLabel: "Subtotal",
    shippingLabel: "Shipping",
    taxLabel: "Estimated tax",
    totalLabel: "Total",
    freeLabel: "Free",
    checkoutLabel: "Continue to checkout",
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

  // This block centralizes the added-product popup text and duration.
  productAdded: {
    message: "Added to your cart",
    ratingLabel: "Rating",
    closeLabel: "Dismiss product confirmation",
    durationMs: 3600,
  },

  // This block centralizes the short message displayed before the footer.
  closingNote: {
    eyebrow: "A NOTE FROM THE STORE",
    title: "Good finds for everyday life.",
    description:
      "Thoughtful picks, familiar favorites, and small details worth keeping close.",
  },
};
