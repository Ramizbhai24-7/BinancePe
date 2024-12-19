import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  amount: number | undefined;
  className?: string;
}

const PriceFormatter = ({ amount, className }: Props) => {
  // Ensure amount is a valid number or default to 0
  const formattedPrice = (amount ?? 0).toLocaleString("en-US", {
    currency: "INR",
    style: "currency",
    minimumFractionDigits: 2,
  });

  return (
    <span className={cn("text-sm font-semibold text-darkColor", className)}>
      {formattedPrice}
    </span>
  );
};

export default PriceFormatter;
