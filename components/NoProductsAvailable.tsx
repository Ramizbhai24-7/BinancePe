import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const NoProductsAvailable = ({
  selectedTab,
  className,
}: {
  selectedTab: string;
  className?: string;
}) => {
  return <div className={cn("flex flex-col items-center justify-between py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10") }>
    <motion.div>
      <h2 className="text-2xl font-bold text-gray-800"> No Product Available</h2>
    </motion.div>
    <motion.p className="text-gray-600">
      we&apos;re sorry, but there are no products matching on{""}
      <span className="text-base font-semibold text-darkColor">{selectedTab}</span>{""}
      criteria at the moment.
    </motion.p>
    <motion.div className="flex items-center text-blue-600 space-x-2">
      <Loader2 className="w-6 h-6 animate-spin" /> <span>We&apos;re restocking shortly</span>
    </motion.div>
    <motion.p className="text-sm text-gray-600">
      Please check back later or explore our other product categories.  
    </motion.p>
  </div>;
};

export default NoProductsAvailable;
