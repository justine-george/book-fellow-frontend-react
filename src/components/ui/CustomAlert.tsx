import React from "react";
import { motion } from "framer-motion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";

interface CustomAlertProps {
  title: string;
  description: string;
  variant?: "default" | "destructive";
  icon?: React.ReactNode;
  className?: string;
}

export const CustomAlert: React.FC<CustomAlertProps> = ({
  title,
  description,
  variant = "default",
  icon = <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <Alert
        variant={variant}
        className={`w-80 sm:w-96 shadow-lg ${className}`}
      >
        {icon}
        <AlertTitle className="text-lg font-semibold mb-2">{title}</AlertTitle>
        <AlertDescription className="text-md">{description}</AlertDescription>
      </Alert>
    </motion.div>
  );
};
