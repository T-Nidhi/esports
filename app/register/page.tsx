"use client"

import type React from "react"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const tournamentId = searchParams.get("tournament")

  const [formStep, setFormStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      tournament: formData.get('tournament') || tournamentId,
      teamName: formData.get('team-name'),
      // teamLogo: formData.get('team-logo'), // File upload handling needs extra steps, skip for now
      teamCaptain: formData.get('team-captain'),
      captainEmail: formData.get('captain-email'),
      captainPhone: formData.get('captain-phone'),
      captainBgmiId: formData.get('captain-bgmi-id'),
      players: [
        {
          name: formData.get('player-2-name'),
          bgmiId: formData.get('player-2-bgmi-id'),
        },
        {
          name: formData.get('player-3-name'),
          bgmiId: formData.get('player-3-bgmi-id'),
        },
        {
          name: formData.get('player-4-name'),
          bgmiId: formData.get('player-4-bgmi-id'),
        },
      ],
      substitute: {
        name: formData.get('substitute-name'),
        bgmiId: formData.get('substitute-bgmi-id'),
      },
      experience: formData.get('experience'),
      additionalInfo: formData.get('additional-info'),
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to register team')

      toast({
        title: "Registration Successful!",
        description: "Your team has been registered. Check your email for confirmation details.",
      })

      setFormStep(2)
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: (error as Error).message || "Something went wrong.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Tournament Registration</h1>
            <p className="text-muted-foreground">
              Register your team for upcoming BGMI tournaments organized by Effortless Esports.
            </p>
          </div>

          {formStep === 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Tournament</CardTitle>
                <CardDescription>Choose the tournament you want to register for.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <RadioGroup defaultValue={tournamentId || "1"} className="space-y-4" name="tournament">
                    <div className="flex items-start space-x-3 space-y-0 rounded-md border p-4">
                      <RadioGroupItem value="1" id="tournament-1" name="tournament" />
                      <div className="flex flex-col">
                        <Label htmlFor="tournament-1" className="font-medium">
                          Mumbai Mayhem
                        </Label>
                        <div className="text-sm text-muted-foreground">
                          June 15-20, 2025 | Prize Pool: ₹5,00,000 | Registration Fee: ₹1,000
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 space-y-0 rounded-md border p-4">
                      <RadioGroupItem value="2" id="tournament-2" name="tournament" />
                      <div className="flex flex-col">
                        <Label htmlFor="tournament-2" className="font-medium">
                          Effortless Cup Season 3
                        </Label>
                        <div className="text-sm text-muted-foreground">
                          July 10-25, 2025 | Prize Pool: ₹10,00,000 | Registration Fee: ₹2,000
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 space-y-0 rounded-md border p-4 opacity-60">
                      <RadioGroupItem value="3" id="tournament-3" disabled name="tournament" />
                      <div className="flex flex-col">
                        <Label htmlFor="tournament-3" className="font-medium">
                          BGMI Pro League
                        </Label>
                        <div className="text-sm text-muted-foreground">
                          August 5-10, 2025 | Prize Pool: ₹3,00,000 | Registration Fee: ₹1,500
                        </div>
                        <div className="text-sm text-primary mt-1">Registration opens on July 1, 2025</div>
                      </div>
                    </div>
                  </RadioGroup>
                  <Button onClick={() => setFormStep(1)} className="w-full">
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {formStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Team Information</CardTitle>
                <CardDescription>Provide details about your team and players.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add onSubmit here */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="team-name">Team Name</Label>
                      <Input id="team-name" name="team-name" placeholder="Enter your team name" required />
                    </div>

                    <div>
                      <Label htmlFor="team-logo">Team Logo (Optional)</Label>
                      <Input id="team-logo" name="team-logo" type="file" accept="image/*" />
                    </div>

                    <div>
                      <Label htmlFor="team-captain">Team Captain Name</Label>
                      <Input id="team-captain" name="team-captain" placeholder="Enter team captain's name" required />
                    </div>

                    <div>
                      <Label htmlFor="captain-email">Captain's Email</Label>
                      <Input id="captain-email" name="captain-email" type="email" placeholder="Enter captain's email" required />
                    </div>

                    <div>
                      <Label htmlFor="captain-phone">Captain's Phone</Label>
                      <Input id="captain-phone" name="captain-phone" placeholder="Enter captain's phone number" required />
                    </div>

                    <div>
                      <Label htmlFor="captain-bgmi-id">Captain's BGMI ID</Label>
                      <Input id="captain-bgmi-id" name="captain-bgmi-id" placeholder="Enter captain's BGMI ID" required />
                    </div>

                    <div>
                      <Label>Team Members</Label>
                      <div className="space-y-4 mt-2">
                        {[2, 3, 4].map((player) => (
                          <div key={player} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-md">
                            <div>
                              <Label htmlFor={`player-${player}-name`}>Player {player} Name</Label>
                              <Input
                                id={`player-${player}-name`}
                                name={`player-${player}-name`}
                                placeholder={`Enter player ${player}'s name`}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor={`player-${player}-bgmi-id`}>Player {player} BGMI ID</Label>
                              <Input
                                id={`player-${player}-bgmi-id`}
                                name={`player-${player}-bgmi-id`}
                                placeholder={`Enter player ${player}'s BGMI ID`}
                                required
                              />
                            </div>
                          </div>
                        ))}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-md">
                          <div>
                            <Label htmlFor="substitute-name">Substitute Player Name (Optional)</Label>
                            <Input id="substitute-name" name="substitute-name" placeholder="Enter substitute player's name" />
                          </div>
                          <div>
                            <Label htmlFor="substitute-bgmi-id">Substitute BGMI ID (Optional)</Label>
                            <Input id="substitute-bgmi-id" name="substitute-bgmi-id" placeholder="Enter substitute player's BGMI ID" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="experience">Team Experience</Label>
                      <Select defaultValue="beginner" name="experience">
                        <SelectTrigger id="experience">
                          <SelectValue placeholder="Select your team's experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (First Tournament)</SelectItem>
                          <SelectItem value="amateur">Amateur (1-3 Tournaments)</SelectItem>
                          <SelectItem value="pro">Pro (3+ Tournaments)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="additional-info">Additional Information (Optional)</Label>
                      <Textarea
                        id="additional-info"
                        name="additional-info"
                        placeholder="Anything else you'd like to tell us?"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setFormStep(0)}>
                      Back
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {formStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Registration Complete</CardTitle>
                <CardDescription>
                  Thank you for registering! You will receive a confirmation email shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setFormStep(0)}>Register Another Team</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
