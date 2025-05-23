import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, amount, reference, callback_url, metadata } = body;

    // Validate required fields
    if (!email || !amount) {
      return NextResponse.json({ status: "error", message: "Email and amount are required" }, { status: 400 });
    }

    // Prepare Paystack payload
    const paystackPayload = {
      email,
      amount: Number(amount) * 100, // Paystack expects amount in kobo
      reference,
      callback_url,
      metadata,
      currency: "NGN",
    };

    // Call Paystack initialize endpoint
    const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paystackPayload),
    });

    const data = await paystackRes.json();

    if (!paystackRes.ok) {
      return NextResponse.json({ status: "error", message: data.message || "Paystack error" }, { status: 500 });
    }

    return NextResponse.json({ status: "success", data: data.data });
  } catch (error: any) {
    return NextResponse.json({ status: "error", message: error.message || "Server error" }, { status: 500 });
  }
}