"use client";

import { TextGenerateEffect } from "../AceternityUi/text-generate-effect";

export default function TextGenrated({ children }) {

    return <TextGenerateEffect words={children} />;
}
