// Page Header Template - Dynamic for single or multiple categories
export const createPageHeader = (categories) => {
  const categoryDescriptions = {
    bedroom: "Let's design the place you always imagined.",
    kitchen: "Create the heart of your home.",
    bathroom: "Transform your personal sanctuary.",
    dining: "Gather around tables that inspire.",
    outdoor: "Make your outdoor space unforgettable.",
    shop: "Discover our collection."
  };

  // Convert single string to array for consistent handling
  const categoryArray = Array.isArray(categories) ? categories : [categories];
  
  // Determine if single or multiple categories
  const isSingleCategory = categoryArray.length === 1;
  const displayTitle = isSingleCategory ? categoryArray[0] : 'Shop';
  const displayTitleLower = displayTitle.toLowerCase();
  const description = categoryDescriptions[displayTitleLower] || "Discover our collection.";

  // Build breadcrumb based on single/multiple categories
  let breadcrumbHTML = `
    <a href="/index.html" class="pageheader_crump">Home</a>
    <i class="fa-solid fa-angle-right"></i>
  `;

  if (isSingleCategory) {
    const categoryPath = `/shop/${displayTitleLower}.html`;
    breadcrumbHTML += `
      <a href="/shop.html" class="pageheader_crump">Shop</a>
      <i class="fa-solid fa-angle-right"></i>
      <a href="${categoryPath}" class="pageheader_crump active_link">${displayTitle}</a>
    `;
  } else {
    breadcrumbHTML += `
      <a href="/shop.html" class="pageheader_crump active_link">Shop</a>
    `;
  }

  return `
      <div class="pageheader_img">
        <img src="/assets/images/shop/shop-hero-background.png" alt="">
      </div>
      <div class="pageheader_header">
        <div class="pageheader_crumps">
          ${breadcrumbHTML}
        </div>
        <h2 class="pageheader_title">${displayTitle}</h2>
        <p>${description}</p>
      </div>
  `;
};