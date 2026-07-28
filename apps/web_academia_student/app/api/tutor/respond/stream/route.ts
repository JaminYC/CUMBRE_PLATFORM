import { streamLessonTutorInteraction } from "@/services/server/tutor-server";
import type { CreateTutorInteractionRequest } from "@cumbre/schemas";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateTutorInteractionRequest;
    const stream = await streamLessonTutorInteraction(payload);
    const encoder = new TextEncoder();

    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            for await (const event of stream) {
              controller.enqueue(
                encoder.encode(`${JSON.stringify(event)}\n`)
              );
            }

            controller.close();
          } catch (error) {
            controller.enqueue(
              encoder.encode(
                `${JSON.stringify({
                  type: "error",
                  payload: {
                    message:
                      error instanceof Error
                        ? error.message
                        : "Tutor streaming failed."
                  }
                })}\n`
              )
            );
            controller.close();
          }
        }
      }),
      {
        headers: {
          "content-type": "application/x-ndjson; charset=utf-8",
          "cache-control": "no-cache, no-transform",
          connection: "keep-alive"
        }
      }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Tutor streaming failed.";

    return Response.json(
      {
        success: false,
        error: {
          code: "TUTOR_STREAM_ERROR",
          message
        }
      },
      { status: 500 }
    );
  }
}
