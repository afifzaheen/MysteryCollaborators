import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body using Zod schema
      const validatedData = contactFormSchema.parse(req.body);

      // Store the contact message
      const message = await storage.createContactMessage({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
      });

      // Return success response
      return res.status(201).json({
        success: true,
        message: "Contact message received successfully",
        data: message
      });
    } catch (error: any) {
      // Handle validation errors
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      }

      // Handle other errors
      console.error("Error handling contact form submission:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing your request"
      });
    }
  });

  // Route to get all contact messages (could be used for an admin dashboard)
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json({
        success: true,
        data: messages
      });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while fetching contact messages"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
