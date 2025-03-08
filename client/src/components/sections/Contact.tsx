import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { Avatoon } from "@/components/Avatoon";

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="order-2 md:order-1">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm md:text-base break-all">lolababatunde413@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm md:text-base">(214) 300-5515</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm md:text-base">Dallas, Texas 75214</span>
                </div>
              </CardContent>
            </Card>

            <div className="relative order-1 md:order-2">
              <Card className="relative z-10">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Your Name" 
                        className="w-full text-base"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full text-base"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Your Message" 
                        className="min-h-[120px] w-full text-base resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="hidden md:block">
                <Avatoon />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}