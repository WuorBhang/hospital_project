import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Search } from 'lucide-react';

const appointments = [
  {
    id: 1,
    patient: 'John Smith',
    doctor: 'Dr. Sarah Williams',
    date: '2024-02-20',
    time: '09:00 AM',
    type: 'Check-up',
    status: 'Scheduled',
  },
  {
    id: 2,
    patient: 'Emma Davis',
    doctor: 'Dr. Michael Thompson',
    date: '2024-02-20',
    time: '10:30 AM',
    type: 'Follow-up',
    status: 'In Progress',
  },
  // Add more appointments as needed
];

function Appointments() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search appointments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <CalendarIcon className="-ml-1 mr-2 h-5 w-5" />
            New Appointment
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar View */}
        <div className="col-span-2 rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-medium text-gray-900">Calendar</h2>
          <div className="h-96 rounded-lg border border-gray-200 bg-gray-50 p-4">
            {/* Calendar implementation would go here */}
            <div className="flex h-full items-center justify-center text-gray-500">
              Calendar View (Implementation pending)
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-medium text-gray-900">Today's Schedule</h2>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="mr-1.5 h-4 w-4" />
                    {appointment.time}
                  </div>
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      appointment.status === 'Scheduled'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-900">{appointment.patient}</h3>
                <p className="text-sm text-gray-500">{appointment.doctor}</p>
                <p className="text-sm text-gray-500">{appointment.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;