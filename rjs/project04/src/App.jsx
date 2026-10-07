import React from 'react'
import Card from './components/Card'
import User from './components/User'
const App = () => {
   const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "5 days ago",
    post: "UI/UX Designer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Part time",
    tag2: "Senior level",
    pay: "$110/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$125/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "4 days ago",
    post: "UI Designer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: "$105/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$130/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "UX Researcher",
    tag1: "Part time",
    tag2: "Senior level",
    pay: "$115/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full time",
    tag2: "Junior level",
    pay: "$95/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    company: "Salesforce",
    datePosted: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$118/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    datePosted: "8 days ago",
    post: "Product Designer",
    tag1: "Full time",
    tag2: "Senior level",
    pay: "$122/hr",
    location: "Bangalore, India"
  }
];
  

  return (
  <div className='parent'>
    {jobs.map(function(){
        return <Card/>
})}
    </div>
  )
  }

export default App
