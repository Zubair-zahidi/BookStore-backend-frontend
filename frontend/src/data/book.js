export const books = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: `Book Title ${i + 1}`,
  author: "John Doe",
  price: 499 + i * 10,
  image: `https://picsum.photos/300/400?random=${i + 1}`,
}));
