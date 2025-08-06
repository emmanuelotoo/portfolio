"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare, Loader2 } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with your actual form handler)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  if (submitted) {
    return (
      <motion.div 
        className="space-y-4 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
          <Mail className="w-6 h-6 text-green-500" />
        </div>
        <div>
          <h3 className="text-white font-medium mb-2">Message sent!</h3>
          <p className="text-secondary-foreground text-sm">
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-white">
        <MessageSquare className="w-4 h-4" />
        <span>&lt; Let&apos;s Connect /&gt;</span>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs text-secondary-foreground flex items-center gap-1">
              <User className="w-3 h-3" />
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-surface border border-surface rounded-md text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-colors"
              placeholder="Your name"
            />
          </div>
          
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs text-secondary-foreground flex items-center gap-1">
              <Mail className="w-3 h-3" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-surface border border-surface rounded-md text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div className="space-y-1">
          <label htmlFor="subject" className="text-xs text-secondary-foreground">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-surface border border-surface rounded-md text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-colors"
            placeholder="Project collaboration, job opportunity, etc."
          />
        </div>
        
        <div className="space-y-1">
          <label htmlFor="message" className="text-xs text-secondary-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 bg-surface border border-surface rounded-md text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-colors resize-none"
            placeholder="Tell me about your project or opportunity..."
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </motion.button>
      </form>
      
      <div className="text-xs text-secondary-foreground text-center pt-2 border-t border-surface">
        Or reach out directly at{" "}
        <a 
          href="mailto:eotoo218@gmail.com" 
          className="text-white hover:underline transition-colors"
        >
          eotoo218@gmail.com
        </a>
      </div>
    </div>
  );
};
