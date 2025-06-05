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

  // Bug Check
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  console.log("Backend URL:", BACKEND_URL); // Debugging

  const Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, message, subject } = formData;

    if (name === "") {
      toast({
        title: "Name is empty",
        description: "Please fill out the name",
      });
    }
    if (email === "") {
      toast({
        title: "email is empty",
        description: "Please fill out the email",
      });
    }
    if (subject === "") {
      toast({
        title: "subject is empty",
        description: "Please fill out the subject",
      });
    }
    if (message === "") {
      toast({
        title: "message is empty",
        description: "Please fill out the message",
      });
    }

    console.log(`${name}, ${email}, ${subject}, ${message}`);

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/sendEmail`,
      { name, email, subject, message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  // For sending mail
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, subject, message } = formData;

    if (!name) {
      toast({
        title: "Name is empty",
        description: "Please fill out the name",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/sendEmail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent.",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="section bg-secondary/30">
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
            <form onSubmit={Submit} className="space-y-6">
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
                onClick={handleSendMessage}
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
