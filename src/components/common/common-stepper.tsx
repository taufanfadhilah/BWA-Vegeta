"use client";

import { useState } from "react";

// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// utils
import { hover } from "@/lib/hover";
import { cn } from "@/lib/utils";

interface StepperProps {
  count: number;
  onChange: (count: number) => void;
}

const CommonStepper: React.FC<StepperProps> = ({
  count,
  onChange,
}: StepperProps) => {
  const [itemCount, setItemCount] = useState(count || 0);

  const limit = { min: 1, max: 100 };

  return (
    <>
      <div className="flex gap-4 items-center">
        <Button
          className={cn(
            "w-[40px] h-[40px] bg-white border text-leaf text-xl",
            hover.shadow
          )}
          onClick={() => {
            if (itemCount <= limit.min) return;

            setItemCount(itemCount - 1);
            onChange(itemCount - 1);
          }}
        >
          -
        </Button>

        <Input
          className="text-center border-0 hover:border"
          style={{
            width: `${itemCount.toString().length + 3}ch`,
          }}
          type="text"
          value={itemCount}
          onChange={(e) => {
            const updatedValue = parseInt(
              e.target.value || limit.min.toString()
            );
            if (updatedValue <= limit.min || isNaN(updatedValue)) {
              setItemCount(limit.min);
              onChange(limit.min);
              return;
            }

            if (updatedValue >= limit.max) {
              setItemCount(limit.max);
              onChange(limit.max);
              return;
            }

            setItemCount(updatedValue);
            onChange(updatedValue);
          }}
        />
        <Button
          className={cn(
            "w-[40px] h-[40px] bg-white border text-leaf text-xl",
            hover.shadow
          )}
          onClick={() => {
            if (itemCount >= limit.max) return;

            setItemCount(itemCount + 1);
            onChange(itemCount + 1);
          }}
        >
          +
        </Button>
      </div>
    </>
  );
};

export default CommonStepper;
