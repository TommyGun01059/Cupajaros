import { NextRequest } from "next/server";

/**
 * Example GET request.
 *
 * @export
 * @param {NextRequest} param0
 * @param {NextRequest} param0.nextUrl: { searchParams }
 * @returns {*}
 */
export function GET({ nextUrl: { searchParams } }: NextRequest) {
  const params = {
    id: searchParams.get("id"),
  };

  const response = {
    message: "Data fetched (GET)",
    data: params,
  };

  return new Response(JSON.stringify(response, null, 2), { status: 200 });
}

/**
 * Example POST request.
 *
 * @export
 * @param {NextRequest} request
 * @returns {*}
 */
export async function POST(request: NextRequest) {
  const body = await request.json();

  const response = {
    message: "Data received (POST)",
    data: body,
  };

  return new Response(JSON.stringify(response, null, 2), { status: 200 });
}

/**
 * Example PUT request.
 *
 * @export
 * @param {NextRequest} request
 * @returns {*}
 */
export async function PUT(request: NextRequest) {
  const body = await request.json();

  const response = {
    message: "Data updated (PUT)",
    data: body,
  };

  return new Response(JSON.stringify(response, null, 2), { status: 200 });
}

/**
 * Example DELETE request.
 *
 * @export
 * @param {NextRequest} param0
 * @param {NextRequest} param0.nextUrl: { searchParams }
 * @returns {*}
 */
export async function DELETE({ nextUrl: { searchParams } }: NextRequest) {
  const params = {
    id: searchParams.get("id"),
  };

  const response = {
    message: `Data with id ${params.id} deleted (DELETE)`,
  };

  return new Response(JSON.stringify(response, null, 2), { status: 200 });
}
