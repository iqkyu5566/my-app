import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Product 1",
    price: 100000,
    images: "ilham",
  },
  {
    id: 2,
    title: "Product 2",
    price: 400000,
    images: "ilham",
  },
];

export async function GET(request: NextResponse) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
    }
  }

  return NextResponse.json({ status: 404, message: "Not Found", data: {} });
}
