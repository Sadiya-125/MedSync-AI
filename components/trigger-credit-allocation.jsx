// components/TriggerCreditAllocation.tsx
"use client";

import { useEffect } from "react";
import { checkAndAllocateCredits } from "@/actions/credits";
import { useUser } from "@clerk/nextjs";

export default function TriggerCreditAllocation() {
  const { user } = useUser();

  useEffect(() => {
    const run = async () => {
      if (user?.publicMetadata?.role === "PATIENT") {
        try {
          await checkAndAllocateCredits(user);
        } catch (err) {
          console.error("Failed to Allocate Credits:", err);
        }
      }
    };

    run();
  }, [user]);

  return null;
}
