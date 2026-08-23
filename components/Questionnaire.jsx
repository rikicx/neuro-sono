"use client";

import { useEffect, useRef } from "react";
import { initQuestionnaire } from "@/app/questionario/questionnaire-engine";

export default function Questionnaire() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    initQuestionnaire();
  }, []);

  return null;
}
