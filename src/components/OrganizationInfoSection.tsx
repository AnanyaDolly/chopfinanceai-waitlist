
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OnboardingFormData } from '@/types/onboarding';
import { ORGANIZATION_TYPES, TEAM_SIZES } from '@/constants/onboarding';

interface OrganizationInfoSectionProps {
  formData: OnboardingFormData;
  onInputChange: (field: keyof OnboardingFormData, value: string) => void;
}

export const OrganizationInfoSection: React.FC<OrganizationInfoSectionProps> = ({
  formData,
  onInputChange
}) => {
  return (
    <>
      {/* Organization Name */}
      <div className="space-y-2">
        <Label htmlFor="organizationName" className="text-sm text-gray-600">
          Organization Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="organizationName"
          placeholder="Enter your organization name"
          value={formData.organizationName}
          onChange={(e) => onInputChange('organizationName', e.target.value)}
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
          <Select value={formData.organizationType} onValueChange={(value) => onInputChange('organizationType', value)}>
            <SelectTrigger className="border-gray-200 focus:border-teal-500 focus:ring-teal-500">
              <SelectValue placeholder="Select organization type..." />
            </SelectTrigger>
            <SelectContent>
              {ORGANIZATION_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-gray-600">
            Team Size <span className="text-red-500">*</span>
          </Label>
          <Select value={formData.teamSize} onValueChange={(value) => onInputChange('teamSize', value)}>
            <SelectTrigger className="border-gray-200 focus:border-teal-500 focus:ring-teal-500">
              <SelectValue placeholder="Select team size..." />
            </SelectTrigger>
            <SelectContent>
              {TEAM_SIZES.map((size) => (
                <SelectItem key={size.value} value={size.value}>
                  {size.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};
