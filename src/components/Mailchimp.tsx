"use client";

import { resend } from "@/app/resources";
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Background,
  Column,
} from "@/once-ui/components";
import { useState } from "react";
import { SpacingToken } from "@/once-ui/types";
import { DisplayProps } from "@/once-ui/interfaces";

function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number = 2000
): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
};

export const ResendNewsletter = ({
  newsletter,
}: {
  newsletter: NewsletterProps;
}) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validate = (value: string) => {
    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const debouncedValidate = debounce(validate, 3000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
    debouncedValidate(value);
  };

  const handleBlur = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSuccess("Thank you for subscribing!");
        setEmail("");
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const effects = resend.effects || {};

  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        mask={{
          cursor: effects.mask?.cursor,
          x: effects.mask?.x,
          y: effects.mask?.y,
          radius: effects.mask?.radius,
        }}
        gradient={{
          display: effects.gradient?.display,
          x: effects.gradient?.x,
          y: effects.gradient?.y,
          width: effects.gradient?.width,
          height: effects.gradient?.height,
          tilt: effects.gradient?.tilt,
          colorStart: effects.gradient?.colorStart,
          colorEnd: effects.gradient?.colorEnd,
          opacity: effects.gradient?.opacity as DisplayProps["opacity"],
        }}
        dots={{
          display: effects.dots?.display,
          color: effects.dots?.color,
          size: effects.dots?.size as unknown as SpacingToken,
          opacity: effects.dots?.opacity as DisplayProps["opacity"],
        }}
        grid={{
          display: effects.grid?.display,
          color: effects.grid?.color,
          width: effects.grid?.width as SpacingToken,
          height: effects.grid?.height as SpacingToken,
          opacity: effects.grid?.opacity as DisplayProps["opacity"],
        }}
        lines={{
          display: effects.lines?.display,
          opacity: effects.lines?.opacity as DisplayProps["opacity"],
        }}
      />
      <Heading
        style={{ position: "relative" }}
        marginBottom="s"
        variant="display-strong-xs"
      >
        {newsletter.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Flex fillWidth maxWidth={24} gap="8">
          <Input
            formNoValidate
            labelAsPlaceholder
            id="newsletter-email"
            name="EMAIL"
            type="email"
            label="Email"
            required
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={error}
            disabled={loading}
          />
          <div className="clear">
            <Flex height="48" vertical="center">
              <Button
                id="newsletter-subscribe"
                value="Subscribe"
                size="m"
                fillWidth
                type="submit"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </Flex>
          </div>
        </Flex>
      </form>
      {success && (
        <Text marginTop="m" onBackground="brand-strong">
          {success}
        </Text>
      )}
      {error && !loading && (
        <Text marginTop="m" onBackground="accent-strong">
          {error}
        </Text>
      )}
    </Column>
  );
};
