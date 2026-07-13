"use client";

import { useState } from "react";

export function useHome() {
  const [ready, setReady] = useState(true);
  return { ready, setReady };
}
