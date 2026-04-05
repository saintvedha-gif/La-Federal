import { siteData } from "../data/siteData";

export function parsePrice(priceStr) {
  return parseInt(String(priceStr).replace(/\D/g, ""), 10) || 0;
}

export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "y")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getMenuCategories() {
  return siteData.menu.categories;
}

export function getAdditionalOptions() {
  return getMenuCategories().find((category) => category.id === "adiciones")?.additions || [];
}

export function getVisibleCategories() {
  return getMenuCategories().filter((category) => category.id !== "adiciones");
}

export function itemHasAdditions(categoryId) {
  return !["bebidas", "cervezas"].includes(categoryId);
}

export function buildCartItem(item, additionsInput = {}) {
  const normalizedAdditions = Array.isArray(additionsInput)
    ? additionsInput
      .filter((addition) => (addition.qty || 0) > 0)
      .map((addition) => ({ ...addition, qty: addition.qty || 1 }))
      .sort((a, b) => a.name.localeCompare(b.name))
    : Object.values(additionsInput)
      .filter((addition) => addition.qty > 0)
      .sort((a, b) => a.name.localeCompare(b.name));

  const additionsPrice = normalizedAdditions.reduce(
    (sum, addition) => sum + (parsePrice(addition.price) * addition.qty),
    0
  );

  const key = [item.name, ...normalizedAdditions.map((addition) => `${addition.name}x${addition.qty}`)].join("__");

  return {
    key,
    name: item.name,
    price: item.price,
    desc: item.desc,
    additions: normalizedAdditions,
    additionsPrice,
    unitTotal: parsePrice(item.price) + additionsPrice
  };
}

export function findProductBySlug(categoryId, productSlug) {
  const category = getVisibleCategories().find((entry) => entry.id === categoryId);
  if (!category?.items) {
    return { category: null, product: null };
  }

  const product = category.items.find((item) => slugify(item.name) === productSlug) || null;
  return { category, product };
}

export function getCartCountForProduct(cart, productName) {
  return Object.values(cart)
    .filter((entry) => entry.name === productName)
    .reduce((sum, entry) => sum + entry.qty, 0);
}
