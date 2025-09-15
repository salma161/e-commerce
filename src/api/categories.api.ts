export default async function getAllCategories() {
  let response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/categories"
  );
  let { data } = await response.json();

  return data;
}
