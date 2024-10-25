import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const medicalRecords = [
  {
    id: 1,
    patient: 'Sarah Johnson',
    diagnosis: 'Hypertension',
    symptoms: ['Headache', 'Dizziness', 'High blood pressure'],
    treatment: 'Prescribed ACE inhibitors',
    date: '2024-02-15',
    doctor: 'Dr. Williams',
  },
  {
    id: 2,
    patient: 'Michael Chen',
    diagnosis: 'Diabetes Type 2',
    symptoms: ['Frequent urination', 'Increased thirst', 'Fatigue'],
    treatment: 'Metformin prescribed, dietary changes recommended',
    date: '2024-02-18',
    doctor: 'Dr. Martinez',
  },
  // Add more records as needed
];

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