import { describe, expect, it } from "vitest";
import { buildMailto, contactSchema } from "@/lib/contact";

describe("contact form", () => {
  it("rejects an invalid email address", () => {
    const r = contactSchema.safeParse({ name: "A", email: "nope", subject: "Hi", message: "Hello there friend" });
    expect(r.success).toBe(false);
  });

  it("addresses the email to Afnan with encoded subject and body", () => {
    const url = buildMailto("afnanqureshi4444@gmail.com", {
      name: "Sara",
      email: "sara@example.com",
      subject: "Project & idea",
      message: "Let's collaborate",
    });
    expect(url.startsWith("mailto:afnanqureshi4444@gmail.com?subject=Project%20%26%20idea&body=")).toBe(true);
    expect(decodeURIComponent(url.split("body=")[1])).toBe("Let's collaborate\n\n— Sara (sara@example.com)");
  });
});
