"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLock, FiAlertCircle } from "react-icons/fi";
import { supabase } from "@/lib/supabase/client";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [loading, setLoading] = useState(true);
  const [validSession, setValidSession] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for recovery token and validate session
    const checkSession = async () => {
      try {
        // Get current session
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError) {
          throw sessionError;
        }

        if (session) {
          setValidSession(true);
        } else {
          setError("Invalid or expired reset link");
        }
      } catch (err: any) {
        console.error("Session check error:", err);
        setError("Invalid or expired reset link");
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setValidSession(true);
        setLoading(false);
      } else if (event === "SIGNED_IN" && session) {
        setValidSession(true);
        setLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 via-white to-blue-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold tracking-wide">MARK</h1>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {loading ? (
            // Loading State
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Verifying your reset link...</p>
            </div>
          ) : validSession ? (
            // Valid Session - Show Form
            <div>
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiLock className="w-7 h-7 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Reset Your Password
                </h2>
                <p className="text-gray-600 text-sm">
                  Enter a new secure password for your account
                </p>
              </div>

              <ResetPasswordForm />
            </div>
          ) : (
            // Invalid/Expired Session
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAlertCircle className="w-7 h-7 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Invalid Reset Link
              </h2>
              <p className="text-gray-600 mb-6">
                {error || "This password reset link has expired or is invalid."}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Password reset links expire after 1 hour for security reasons.
              </p>
              <Link
                href="/"
                className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          )}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          Need help?{" "}
          <Link
            href="/"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Contact Support
          </Link>
        </motion.p>
      </div>
    </div>
  );
}
