"use client";

import { useState } from "react";

export function useDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  return { activeTab, setActiveTab };
}
