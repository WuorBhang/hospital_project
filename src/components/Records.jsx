import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const patients = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 45,
    gender: 'Female',
    condition: 'Hypertension',
    lastVisit: '2024-02-15',
    status: 'Stable',
  },
  {
    id: 2,
    name: 'Michael Chen',
    age: 62,
    gender: 'Male',
    condition: 'Diabetes Type 2',
    lastVisit: '2024-02-18',
    status: 'Under Observation',
  },
  {
    id: 3,
    name: 'Emily Davis',
    age: 34,
    gender: 'Female',
    condition: 'Asthma',
    lastVisit: '2024-03-05',
    status: 'Stable',
  },
  {
    id: 4,
    name: 'James Smith',
    age: 50,
    gender: 'Male',
    condition: 'Coronary Artery Disease',
    lastVisit: '2024-01-20',
    status: 'Critical',
  },
  {
    id: 5,
    name: 'Olivia Brown',
    age: 28,
    gender: 'Female',
    condition: 'Hyperthyroidism',
    lastVisit: '2024-03-10',
    status: 'Stable',
  },
  {
    id: 6,
    name: 'David Wilson',
    age: 55,
    gender: 'Male',
    condition: 'Chronic Kidney Disease',
    lastVisit: '2024-02-25',
    status: 'Under Observation',
  },
  {
    id: 7,
    name: 'Sophia Taylor',
    age: 40,
    gender: 'Female',
    condition: 'Depression',
    lastVisit: '2024-02-12',
    status: 'Stable',
  },
  {
    id: 8,
    name: 'Daniel Johnson',
    age: 46,
    gender: 'Male',
    condition: 'COPD',
    lastVisit: '2024-03-15',
    status: 'Critical',
  },
  // Add more patients as needed
];

// Create medical records from patients
const medicalRecords = patients.map((patient) => ({
  id: patient.id,
  patient: patient.name,
  diagnosis: patient.condition,
  symptoms: getSymptoms(patient.condition),
  treatment: getTreatment(patient.condition),
  date: patient.lastVisit,
  doctor: getDoctor(patient.condition),
}));

// Function to get symptoms based on condition
function getSymptoms(condition) {
  switch (condition) {
    case 'Hypertension':
      return ['Headache', 'Dizziness', 'High blood pressure'];
    case 'Diabetes Type 2':
      return ['Frequent urination', 'Increased thirst', 'Fatigue'];
    case 'Asthma':
      return ['Wheezing', 'Coughing', 'Shortness of breath'];
    case 'Coronary Artery Disease':
      return ['Chest pain', 'Shortness of breath', 'Fatigue'];
    case 'Hyperthyroidism':
      return ['Rapid heartbeat', 'Weight loss', 'Nervousness'];
    case 'Chronic Kidney Disease':
      return ['Fatigue', 'Swelling', 'Nausea'];
    case 'Depression':
      return ['Sadness', 'Fatigue', 'Loss of interest'];
    case 'COPD':
      return ['Chronic cough', 'Shortness of breath', 'Wheezing'];
    // Add more conditions as needed
    default:
      return [];
  }
}

// Function to get treatment based on condition
function getTreatment(condition) {
  switch (condition) {
    case 'Hypertension':
      return 'Prescribed ACE inhibitors';
    case 'Diabetes Type 2':
      return 'Metformin prescribed, dietary changes recommended';
    case 'Asthma':
      return 'Inhalers prescribed, lifestyle changes recommended';
    case 'Coronary Artery Disease':
      return 'Lifestyle changes, medications prescribed';
    case 'Hyperthyroidism':
      return 'Antithyroid medication prescribed';
    case 'Chronic Kidney Disease':
      return 'Dietary changes, medication prescribed';
    case 'Depression':
      return 'Cognitive Behavioral Therapy recommended';
    case 'COPD':
      return 'Bronchodilators and steroids prescribed';
    // Add more conditions as needed
    default:
      return 'No treatment specified';
  }
}

// Function to get treating doctor based on condition
function getDoctor(condition) {
  switch (condition) {
    case 'Hypertension':
      return 'Dr. Williams';
    case 'Diabetes Type 2':
      return 'Dr. Martinez';
    case 'Asthma':
      return 'Dr. Patel';
    case 'Coronary Artery Disease':
      return 'Dr. Thompson';
    case 'Hyperthyroidism':
      return 'Dr. Green';
    case 'Chronic Kidney Disease':
      return 'Dr. Carter';
    case 'Depression':
      return 'Dr. Lewis';
    case 'COPD':
      return 'Dr. Wilson';
    // Add more conditions as needed
    default:
      return 'General Practitioner';
  }
}

// Total number of records
const totalRecords = medicalRecords.length;

// Logging the records and total count
console.log(medicalRecords);
console.log(`Total Records: ${totalRecords}`);


function Records() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <h1 className="text-2xl font-semibold text-gray-900">Medical Records</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search records..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="block rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="all">All Records</option>
            <option value="recent">Recent</option>
            <option value="critical">Critical</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {medicalRecords.map((record) => (
          <div
            key={record.id}
            className="rounded-lg bg-white p-6 shadow transition-all hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">{record.patient}</h2>
              <span className="text-sm text-gray-500">{record.date}</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Diagnosis</h3>
                <p className="mt-1 text-sm text-gray-900">{record.diagnosis}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Treating Doctor</h3>
                <p className="mt-1 text-sm text-gray-900">{record.doctor}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Symptoms</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {record.symptoms.map((symptom, index) => (
                    <span
                      key={index}
                      className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Treatment</h3>
                <p className="mt-1 text-sm text-gray-900">{record.treatment}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                View Full Record
              </button>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                Update Record
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Records;