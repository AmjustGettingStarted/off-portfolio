import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/animation";
import { SectionHeading } from "@/components/ui/AnimatedText";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Map, Mail, Send } from "lucide-react";
import axios from "axios";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Vercel serverless endpoint (same-origin in production).
  // In local dev, vite.config.ts proxies this to the Express backend.
  const API_URL = "/api/sendEmail";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      toast({
        title: "Missing fields",
        description: "Please fill out all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        API_URL,
        { name, email, subject, message },
        {
          headers: { "Content-Type": "application/json" },
          timeout: 15000,
        }
      );

      if (response.status === 200 && response.data?.success !== false) {
        toast({
          title: "Message sent!",
          description:
            "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(response.data?.error || "Failed to send message");
      }
    } catch (error: unknown) {
      console.error("Send email failed:", error);
      const messageText =
        axios.isAxiosError(error)
          ? error.response?.data?.error ||
            error.message ||
            "Failed to send message. Please try again."
          : error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.";

      // Common Resend pitfall: free onboarding@resend.dev domain only
      // delivers to the Resend account owner's inbox.
      toast({
        title: "Failed to send message",
        description: messageText,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-background">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container"
      >
        <SectionHeading>Get In Touch</SectionHeading>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div variants={fadeIn("right", 0.2)}>
            <h3 className="mb-6 text-2xl font-medium">
              Let's build something amazing together
            </h3>
            <p className="mb-8 text-muted-foreground">
              Have an idea or a project you'd like to discuss? I'm always
              excited to collaborate, solve problems, and create meaningful
              experiences. Drop me a message, and let's make it happen!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Email</h4>
                  <p className="text-muted-foreground">
                    harshithmv2002@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Map className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Location</h4>
                  <p className="text-muted-foreground">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", 0.2)}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="min-h-[150px] resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
