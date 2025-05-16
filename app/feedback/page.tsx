"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function FeedbackPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Feedback Submitted!",
      description: "Thank you for your feedback. We appreciate your input.",
    })

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Feedback</h1>
            <p className="text-muted-foreground">We value your feedback! Help us improve our tournaments and events.</p>
          </div>

          {!isSubmitted ? (
            <Card>
              <CardHeader>
                <CardTitle>Share Your Thoughts</CardTitle>
                <CardDescription>
                  Your feedback helps us create better experiences for the BGMI community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" required />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>

                    <div>
                      <Label htmlFor="feedback-type">Feedback Type</Label>
                      <Select defaultValue="tournament">
                        <SelectTrigger id="feedback-type">
                          <SelectValue placeholder="Select feedback type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tournament">Tournament Experience</SelectItem>
                          <SelectItem value="event">Event Experience</SelectItem>
                          <SelectItem value="website">Website Feedback</SelectItem>
                          <SelectItem value="community">Community Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="specific-event">Specific Tournament/Event (Optional)</Label>
                      <Input id="specific-event" placeholder="Enter the name of the tournament or event" />
                    </div>

                    <div>
                      <Label>Overall Experience</Label>
                      <RadioGroup defaultValue="4" className="flex space-x-2 mt-2">
                        {[1, 2, 3, 4, 5].map((value) => (
                          <div key={value} className="flex flex-col items-center">
                            <RadioGroupItem value={value.toString()} id={`rating-${value}`} className="sr-only" />
                            <Label
                              htmlFor={`rating-${value}`}
                              className="cursor-pointer p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-muted data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            >
                              {value}
                            </Label>
                            {value === 1 && <span className="text-xs mt-1">Poor</span>}
                            {value === 5 && <span className="text-xs mt-1">Excellent</span>}
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="feedback">Your Feedback</Label>
                      <Textarea
                        id="feedback"
                        placeholder="Please share your detailed feedback, suggestions, or concerns"
                        rows={6}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="improvements">Suggested Improvements (Optional)</Label>
                      <Textarea
                        id="improvements"
                        placeholder="What specific improvements would you like to see?"
                        rows={4}
                      />
                    </div>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Submitting..." : "Submit Feedback"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Thank You for Your Feedback!</CardTitle>
                <CardDescription>We appreciate you taking the time to share your thoughts with us.</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="bg-primary/10 text-primary p-6 rounded-lg">
                  <p>
                    Your feedback has been successfully submitted. We review all feedback carefully and use it to
                    improve our tournaments, events, and overall experience.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">What happens next?</h3>
                  <p className="text-muted-foreground">
                    Our team will review your feedback. If you've shared a specific concern that requires follow-up,
                    we'll contact you via the email address you provided.
                  </p>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full sm:w-auto">
                    <a href="/">Return to Home</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
