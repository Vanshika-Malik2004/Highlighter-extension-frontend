export interface PasswordValidationResult {
  isValid: boolean;
  errors: string[];
  strength: "weak" | "medium" | "strong";
  requirements: {
    minLength: boolean;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumber: boolean;
    hasSpecialChar: boolean;
  };
}

export const validatePassword = (
  password: string
): PasswordValidationResult => {
  const errors: string[] = [];

  // Check requirements
  const requirements = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  // Add errors for unmet requirements
  if (!requirements.minLength) {
    errors.push("Password must be at least 8 characters long");
  }
  if (!requirements.hasUppercase) {
    errors.push("Password must contain at least one uppercase letter");
  }
  if (!requirements.hasLowercase) {
    errors.push("Password must contain at least one lowercase letter");
  }
  if (!requirements.hasNumber) {
    errors.push("Password must contain at least one number");
  }
  if (!requirements.hasSpecialChar) {
    errors.push("Password must contain at least one special character");
  }

  // Calculate strength
  const metRequirements = Object.values(requirements).filter(Boolean).length;
  let strength: "weak" | "medium" | "strong" = "weak";

  if (metRequirements >= 5) {
    strength = "strong";
  } else if (metRequirements >= 3) {
    strength = "medium";
  }

  return {
    isValid: errors.length === 0,
    errors,
    strength,
    requirements,
  };
};

export const passwordsMatch = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword && password.length > 0;
};
