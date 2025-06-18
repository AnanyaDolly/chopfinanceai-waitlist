
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OnboardingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organizationName: '',
    organizationType: '',
    teamSize: '',
    location: '',
    howDidYouHear: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-emerald-50 to-cyan-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-xl border-0 rounded-2xl">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-semibold text-gray-800 mb-2">
            Chop Finance
          </CardTitle>
          <h2 className="text-xl font-medium text-gray-700 mb-2">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500">
            Please fill in your details below
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm text-gray-600">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm text-gray-600">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-gray-600">
                Email address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                required
              />
            </div>

            {/* Organization Name */}
            <div className="space-y-2">
              <Label htmlFor="organizationName" className="text-sm text-gray-600">
                Organization Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="organizationName"
                placeholder="Enter your organization name"
                value={formData.organizationName}
                onChange={(e) => handleInputChange('organizationName', e.target.value)}
                className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                required
              />
            </div>

            {/* Organization Type and Team Size Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm text-gray-600">
                  Organization Type <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.organizationType} onValueChange={(value) => handleInputChange('organizationType', value)}>
                  <SelectTrigger className="border-gray-200 focus:border-teal-500 focus:ring-teal-500">
                    <SelectValue placeholder="Select organization type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ca-firm">CA Firm</SelectItem>
                    <SelectItem value="corporate">Corporate</SelectItem>
                    <SelectItem value="law-firm">Law Firm</SelectItem>
                    <SelectItem value="investment-bank">Investment Bank</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="non-profit">Non-Profit</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-gray-600">
                  Team Size <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
                  <SelectTrigger className="border-gray-200 focus:border-teal-500 focus:ring-teal-500">
                    <SelectValue placeholder="Select team size..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 person</SelectItem>
                    <SelectItem value="2-5">2-5 people</SelectItem>
                    <SelectItem value="6-10">6-10 people</SelectItem>
                    <SelectItem value="11-25">11-25 people</SelectItem>
                    <SelectItem value="26-50">26-50 people</SelectItem>
                    <SelectItem value="51-100">51-100 people</SelectItem>
                    <SelectItem value="101-500">101-500 people</SelectItem>
                    <SelectItem value="500+">500+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm text-gray-600">
                Location <span className="text-red-500">*</span>
              </Label>
              <Input
                id="location"
                placeholder="Enter your location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                required
              />
            </div>

            {/* How did you hear about us */}
            <div className="space-y-2">
              <Label className="text-sm text-gray-600">
                How did you hear about us?
              </Label>
              <Select value={formData.howDidYouHear} onValueChange={(value) => handleInputChange('howDidYouHear', value)}>
                <SelectTrigger className="border-gray-200 focus:border-teal-500 focus:ring-teal-500">
                  <SelectValue placeholder="Select how you heard about us..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="search-engine">Search Engine (Google, Bing, etc.)</SelectItem>
                  <SelectItem value="social-media">Social Media</SelectItem>
                  <SelectItem value="colleague-referral">Colleague Referral</SelectItem>
                  <SelectItem value="industry-publication">Industry Publication</SelectItem>
                  <SelectItem value="conference-event">Conference/Event</SelectItem>
                  <SelectItem value="partner-referral">Partner Referral</SelectItem>
                  <SelectItem value="advertisement">Advertisement</SelectItem>
                  <SelectItem value="word-of-mouth">Word of Mouth</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-6 rounded-lg mt-6 transition-colors duration-200"
            >
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;
