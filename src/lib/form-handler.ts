// Form handling utilities
export interface FormData {
  company: string;
  name: string;
  email: string;
  phone?: string;
  role: string;
  projectType: string;
  timeline?: string;
  message?: string;
  newsletter?: boolean;
  privacy: boolean;
}

export async function submitDemoRequest(data: FormData): Promise<{ success: boolean; message: string }> {
  try {
    // In a real implementation, you would send this to your backend or Formspree
    // For now, we'll simulate the submission
    
    console.log('Demo request submitted:', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, replace this with actual form submission
    // Example with Formspree:
    /*
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Form submission failed');
    }
    */
    
    return {
      success: true,
      message: "Thank you for your interest! We'll contact you within 24 hours to schedule your demo."
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: "Sorry, there was an error submitting your request. Please try again or contact us directly."
    };
  }
}

// Form validation
export function validateForm(data: Partial<FormData>): string[] {
  const errors: string[] = [];
  
  if (!data.company?.trim()) {
    errors.push('Company name is required');
  }
  
  if (!data.name?.trim()) {
    errors.push('Full name is required');
  }
  
  if (!data.email?.trim()) {
    errors.push('Email address is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!data.role) {
    errors.push('Please select your role');
  }
  
  if (!data.projectType) {
    errors.push('Please select your project type');
  }
  
  if (!data.privacy) {
    errors.push('Please accept the Privacy Policy and Terms of Service');
  }
  
  return errors;
}
