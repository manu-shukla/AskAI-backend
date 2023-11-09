import { HfInference } from "@huggingface/inference"
import { HuggingFaceStream, StreamingTextResponse } from "ai"
import { experimental_buildOpenAssistantPrompt } from "ai/prompts"
import { NextResponse } from "next/server"

const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY)

export const runtime = "edge"

export async function POST(req: Request) {
  const { messages } = await req.json()
  const response = await Hf.textGenerationStream({
    model: "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",
    inputs: experimental_buildOpenAssistantPrompt(messages),
    parameters: {
      max_new_tokens: 200,
      // @ts-ignore
      typical_p: 0.2,
      repetition_penalty: 1,
      truncate: 1000,
      return_full_text: false
    }
  })

  const stream = HuggingFaceStream(response)

  const res = new StreamingTextResponse(stream)
  // res.headers.append("Content-Type", "application/json")
  // res.headers.append("Access-Control-Allow-Origin", "*")
  // res.headers.append(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  // )
  // res.headers.append(
  //   "Access-Control-Allow-Headers",
  //   "Origin, Content-Type, X-Auth-Token, content-type"
  // )
  // res.headers.append("Access-Control-Allow-Credentials", "true")

  return res
}
