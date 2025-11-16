"use client";

import { motion } from "framer-motion";
import { FiCheck, FiX } from "react-icons/fi";
import type { PasswordValidationResult } from "@/utils/passwordValidation";

interface PasswordStrengthMeterProps {
  validation: PasswordValidationResult;
  showRequirements?: boolean;
}

export default function PasswordStrengthMeter({
  validation,
  showRequirements = true,
}: PasswordStrengthMeterProps) {
  const getStrengthColor = () => {
    switch (validation.strength) {
      case "strong":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "weak":
        return "bg-red-500";
      default:
        return "bg-gray-300";
    }
  };

  const getStrengthWidth = () => {
    switch (validation.strength) {
      case "strong":
        return "w-full";
      case "medium":
        return "w-2/3";
      case "weak":
        return "w-1/3";
      default:
        return "w-0";
    }
  };

  const getStrengthText = () => {
    switch (validation.strength) {
      case "strong":
        return "Strong password";
      case "medium":
        return "Medium strength";
      case "weak":
        return "Weak password";
      default:
        return "";
    }
  };

  const getStrengthTextColor = () => {
    switch (validation.strength) {
      case "strong":
        return "text-green-600";
      case "medium":
        return "text-yellow-600";
      case "weak":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };

  const requirements = [
    { met: validation.requirements.minLength, text: "At least 8 characters" },
    { met: validation.requirements.hasUppercase, text: "One uppercase letter" },
    { met: validation.requirements.hasLowercase, text: "One lowercase letter" },
    { met: validation.requirements.hasNumber, text: "One number" },
    {
      met: validation.requirements.hasSpecialChar,
      text: "One special character",
    },
  ];

  return (
    <div className="w-full space-y-2">
      {/* Strength Bar */}
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width:
              validation.strength === "strong"
                ? "100%"
                : validation.strength === "medium"
                ? "66%"
                : "33%",
          }}
          transition={{ duration: 0.3 }}
          className={`h-full ${getStrengthColor()} rounded-full`}
        />
      </div>

      {/* Strength Text */}
      <p className={`text-xs font-medium ${getStrengthTextColor()}`}>
        {getStrengthText()}
      </p>

      {/* Requirements List */}
      {showRequirements && (
        <div className="space-y-1.5 mt-3">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-2"
            >
              {req.met ? (
                <FiCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
              ) : (
                <FiX className="w-4 h-4 text-gray-400 flex-shrink-0" />
              )}
              <span
                className={`text-xs ${
                  req.met ? "text-green-600" : "text-gray-500"
                }`}
              >
                {req.text}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
