import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Call the external chatbot service
    const response = await fetch("https://med-sync-ai.streamlit.app/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `msg=${encodeURIComponent(message)}`,
    });

    if (!response.ok) {
      throw new Error(
        `External service responded with status: ${response.status}`
      );
    }

    const botResponse = await response.text();

    return NextResponse.json({
      response: botResponse,
      success: true,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error: "Failed to get response from chatbot",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
