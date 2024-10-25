import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';

const patients = [
  {
    id: 1,
    name: 'Victor Castillo',
    age: 80,
    gender: 'Male',
    condition: 'Congestive Heart Failure',
    lastVisit: '2024-10-15',
    status: 'Stable',
  },
  {
    id: 2,
    name: 'Christina Washington',
    age: 65,
    gender: 'Female',
    condition: 'Type 2 Diabetes Mellitus',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 3,
    name: 'Devin Mitchell',
    age: 26,
    gender: 'Male',
    condition: 'Anxiety Disorder',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 4,
    name: 'Matthew Oneill',
    age: 84,
    gender: 'Female',
    condition: 'Osteoporosis',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 5,
    name: 'Casey Thomas',
    age: 76,
    gender: 'Female',
    condition: 'Chronic Obstructive Pulmonary Disease (COPD)',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 6,
    name: 'Johnny Jackson',
    age: 57,
    gender: 'Female',
    condition: 'Hypertension',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 7,
    name: 'Cynthia King',
    age: 40,
    gender: 'Male',
    condition: 'Rheumatoid Arthritis',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 8,
    name: 'Alex Everett',
    age: 57,
    gender: 'Female',
    condition: 'Chronic Kidney Disease',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 9,
    name: 'John Patterson',
    age: 71,
    gender: 'Female',
    condition: 'Alzheimer’s Disease',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 10,
    name: 'Bridget Stewart MD',
    age: 21,
    gender: 'Female',
    condition: 'Seasonal Allergies',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 11,
    name: 'Dawn Allison',
    age: 77,
    gender: 'Male',
    condition: 'Coronary Artery Disease',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 12,
    name: 'April Chavez',
    age: 66,
    gender: 'Male',
    condition: 'Atrial Fibrillation',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 13,
    name: 'Diane Hernandez',
    age: 51,
    gender: 'Male',
    condition: 'Hyperlipidemia',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 14,
    name: 'Eric Williams',
    age: 77,
    gender: 'Male',
    condition: 'Diabetic Neuropathy',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 15,
    name: 'Thomas Jackson',
    age: 84,
    gender: 'Female',
    condition: 'Parkinson’s Disease',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 16,
    name: 'Joshua Fox',
    age: 51,
    gender: 'Male',
    condition: 'Multiple Sclerosis',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 17,
    name: 'Marcia Boone',
    age: 59,
    gender: 'Male',
    condition: 'Chronic Fatigue Syndrome',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 18,
    name: 'Taylor King',
    age: 89,
    gender: 'Male',
    condition: 'Severe Osteoarthritis',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 19,
    name: 'Jason Richards',
    age: 21,
    gender: 'Female',
    condition: 'Asthma',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 20,
    name: 'Holly Mccall',
    age: 86,
    gender: 'Male',
    condition: 'Hypothyroidism',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 21,
    name: 'Andrew Alvarez',
    age: 81,
    gender: 'Female',
    condition: 'Gout',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 22,
    name: 'Lorraine Serrano',
    age: 83,
    gender: 'Male',
    condition: 'Celiac Disease',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 23,
    name: 'William Pratt',
    age: 54,
    gender: 'Female',
    condition: 'Psoriasis',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 24,
    name: 'Sean Valdez',
    age: 20,
    gender: 'Male',
    condition: 'Attention Deficit Hyperactivity Disorder (ADHD)',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 25,
    name: 'Kelsey Lopez',
    age: 44,
    gender: 'Female',
    condition: 'Panic Disorder',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 26,
    name: 'Amy Mcclain MD',
    age: 78,
    gender: 'Male',
    condition: 'Urinary Incontinence',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 27,
    name: 'Michael Sanchez Jr.',
    age: 33,
    gender: 'Female',
    condition: 'Post-Traumatic Stress Disorder (PTSD)',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 28,
    name: 'Dr. Joshua Morgan MD',
    age: 90,
    gender: 'Female',
    condition: 'Age-related Macular Degeneration',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 29,
    name: 'Teresa Lindsey',
    age: 56,
    gender: 'Female',
    condition: 'Chronic Pain Syndrome',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 30,
    name: 'Charles Cox',
    age: 50,
    gender: 'Male',
    condition: 'Sleep Apnea',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 31,
    name: 'Nathan Moore',
    age: 38,
    gender: 'Female',
    condition: 'Acid Reflux (GERD)',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 32,
    name: 'Brandon Hall',
    age: 42,
    gender: 'Female',
    condition: 'Lupus',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 33,
    name: 'Daniel Romero',
    age: 81,
    gender: 'Male',
    condition: 'Pneumonia',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 34,
    name: 'Johnny Anderson',
    age: 72,
    gender: 'Female',
    condition: 'Erectile Dysfunction',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 35,
    name: 'Teresa Pope',
    age: 42,
    gender: 'Male',
    condition: 'Thyroid Cancer',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 36,
    name: 'David Anderson',
    age: 38,
    gender: 'Male',
    condition: 'Stroke',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 37,
    name: 'Kerry Davidson',
    age: 58,
    gender: 'Male',
    condition: 'Bipolar Disorder',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 38,
    name: 'Mary Hunt',
    age: 56,
    gender: 'Female',
    condition: 'Chronic Liver Disease',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 39,
    name: 'Kylie Reilly',
    age: 41,
    gender: 'Male',
    condition: 'Gastroesophageal Reflux Disease (GERD)',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 40,
    name: 'Chad Marsh',
    age: 26,
    gender: 'Male',
    condition: 'Migraine',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 41,
    name: 'Sara Jacobs',
    age: 37,
    gender: 'Female',
    condition: 'Pneumothorax',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 42,
    name: 'Kelly Sanchez',
    age: 48,
    gender: 'Male',
    condition: 'Gout',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 43,
    name: 'Isabella Edwards',
    age: 65,
    gender: 'Female',
    condition: 'Esophageal Cancer',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 44,
    name: 'Brian Smith',
    age: 80,
    gender: 'Female',
    condition: 'Diabetic Retinopathy',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 45,
    name: 'Jessica Collins',
    age: 29,
    gender: 'Male',
    condition: 'Cirrhosis',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 46,
    name: 'Paul Rogers',
    age: 31,
    gender: 'Female',
    condition: 'Fibromyalgia',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 47,
    name: 'Danielle Bennett',
    age: 50,
    gender: 'Male',
    condition: 'Hepatitis C',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 48,
    name: 'Alfredo Johnson',
    age: 52,
    gender: 'Female',
    condition: 'Chronic Fatigue Syndrome',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 49,
    name: 'John Michael',
    age: 68,
    gender: 'Male',
    condition: 'Chronic Sinusitis',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
  {
    id: 50,
    name: 'Raymond Martinez',
    age: 80,
    gender: 'Female',
    condition: 'Chronic Back Pain',
    lastVisit: '2024-10-20',
    status: 'Stable',
  },
];

// Sample usage
patients.forEach(patient => {
  console.log(`Patient ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}, Gender: ${patient.gender}, Condition: ${patient.condition}, Last Visit: ${patient.lastVisit}, Status: ${patient.status}`);
});

function Patients() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <h1 className="text-2xl font-semibold text-gray-900">Patients</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            Add Patient
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Age/Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Condition
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Last Visit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-500">
                      {patient.age} / {patient.gender}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">{patient.condition}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-500">{patient.lastVisit}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        patient.status === 'Stable'
                          ? 'bg-green-100 text-green-800'
                          : patient.status === 'Critical'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">View</button>
                    <span className="mx-2 text-gray-300">|</span>
                    <button className="text-blue-600 hover:text-blue-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Patients;