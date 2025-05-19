
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [teamMembers, setTeamMembers] = useState([
    { name: '', email: '', role: '' },
    { name: '', email: '', role: '' }
  ]);
  
  const [teamData, setTeamData] = useState({
    teamName: '',
    projectTitle: '',
    projectDescription: '',
    themeChoice: 'agentic-ai',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTeamData({
      ...teamData,
      [name]: value
    });
  };
  
  const handleTeamMemberChange = (index: number, field: string, value: string) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = {
      ...updatedMembers[index],
      [field]: value
    };
    setTeamMembers(updatedMembers);
  };
  
  const addTeamMember = () => {
    if (teamMembers.length < 4) {
      setTeamMembers([...teamMembers, { name: '', email: '', role: '' }]);
    } else {
      toast({
        title: "Maximum team size reached",
        description: "Teams can have a maximum of 4 members.",
        variant: "destructive"
      });
    }
  };
  
  const removeTeamMember = (index: number) => {
    if (teamMembers.length > 2) {
      const updatedMembers = [...teamMembers];
      updatedMembers.splice(index, 1);
      setTeamMembers(updatedMembers);
    } else {
      toast({
        title: "Minimum team size required",
        description: "Teams must have at least 2 members.",
        variant: "destructive"
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!teamData.teamName || !teamData.projectTitle || !teamData.projectDescription) {
      toast({
        title: "Incomplete form",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Check if all team members have at least a name and email
    const isTeamValid = teamMembers.every(member => member.name && member.email);
    
    if (!isTeamValid) {
      toast({
        title: "Incomplete team information",
        description: "Please provide name and email for all team members.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    toast({
      title: "Registration successful!",
      description: "Your team has been registered for Vibe-A-Thon.",
    });
    
    // Redirect to home page after short delay
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-900">Register Your Team</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Team Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-900 border-b border-purple-100 pb-2">Team Information</h2>
              
              <div>
                <Label htmlFor="teamName">Team Name*</Label>
                <Input 
                  id="teamName"
                  name="teamName"
                  placeholder="Enter your team name"
                  value={teamData.teamName}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="themeChoice">Hackathon Theme*</Label>
                <select
                  id="themeChoice"
                  name="themeChoice"
                  value={teamData.themeChoice}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="agentic-ai">Agentic AI</option>
                  <option value="ai-powered-dev">AI-Powered Development</option>
                </select>
              </div>
            </div>
            
            {/* Project Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-purple-900 border-b border-purple-100 pb-2">Project Information</h2>
              
              <div>
                <Label htmlFor="projectTitle">Project Title*</Label>
                <Input 
                  id="projectTitle"
                  name="projectTitle"
                  placeholder="Enter your project title"
                  value={teamData.projectTitle}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="projectDescription">Project Description*</Label>
                <Textarea 
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Brief description of your project idea (you'll submit a detailed one-pager separately)"
                  value={teamData.projectDescription}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="mt-1"
                />
              </div>
            </div>
            
            {/* Team Members */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-purple-100 pb-2">
                <h2 className="text-xl font-semibold text-purple-900">Team Members</h2>
                {teamMembers.length < 4 && (
                  <Button 
                    type="button"
                    onClick={addTeamMember}
                    variant="outline"
                    size="sm"
                    className="text-purple-700 border-purple-300"
                  >
                    Add Member
                  </Button>
                )}
              </div>
              
              {teamMembers.map((member, index) => (
                <div key={index} className="p-4 border rounded-lg border-gray-200 bg-gray-50">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Team Member {index + 1}</h3>
                    {teamMembers.length > 2 && (
                      <Button 
                        type="button"
                        onClick={() => removeTeamMember(index)}
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor={`member-name-${index}`}>Name*</Label>
                      <Input 
                        id={`member-name-${index}`}
                        placeholder="Full name"
                        value={member.name}
                        onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`member-email-${index}`}>Email*</Label>
                      <Input 
                        id={`member-email-${index}`}
                        type="email"
                        placeholder="Work email"
                        value={member.email}
                        onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`member-role-${index}`}>Role</Label>
                      <Input 
                        id={`member-role-${index}`}
                        placeholder="Role/Expertise"
                        value={member.role}
                        onChange={(e) => handleTeamMemberChange(index, 'role', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Terms and Conditions */}
            <div className="border-t border-purple-100 pt-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <Label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the hackathon rules, code of conduct, and understand that all projects created are owned by WonderBotz.
                </Label>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-2">
                Register Team
              </Button>
            </div>
          </form>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mt-8">
          <p className="text-gray-600">
            Need help with registration? Contact{" "}
            <a href="mailto:hackathon@wonderbotz.com" className="text-purple-700 hover:underline">
              hackathon@wonderbotz.com
            </a>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
