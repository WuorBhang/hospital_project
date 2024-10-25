import React from 'react';
import { Users, Calendar, Activity, AlertCircle } from 'lucide-react';

const stats = [
  { name: 'Total Patients', value: '2,847', icon: Users, color: 'bg-blue-500' },
  { name: 'Appointments Today', value: '42', icon: Calendar, color: 'bg-green-500' },
  { name: 'Active Cases', value: '156', icon: Activity, color: 'bg-yellow-500' },
  { name: 'Critical Cases', value: '8', icon: AlertCircle, color: 'bg-red-500' },
];

const recentPatients = [
  { id: 1, name: 'Sarah Johnson', condition: 'Hypertension', status: 'Stable' },
  { id: 2, name: 'Michael Chen', condition: 'Diabetes Type 2', status: 'Under Observation' },
  { id: 3, name: 'Emma Davis', condition: 'Pneumonia', status: 'Critical' },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="overflow-hidden rounded-lg bg-white shadow transition-all hover:shadow-md"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`rounded-md ${stat.color} p-3`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Recent Patients */}
        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Patients</h3>
            <div className="mt-4">
              <div className="flow-root">
                <ul className="-my-5 divide-y divide-gray-200">
                  {recentPatients.map((patient) => (
                    <li key={patient.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900">
                            {patient.name}
                          </p>
                          <p className="truncate text-sm text-gray-500">{patient.condition}</p>
                        </div>
                        <div>
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              patient.status === 'Critical'
                                ? 'bg-red-100 text-red-800'
                                : patient.status === 'Stable'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {patient.status}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Appointments */}
        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Today's Appointments</h3>
            <div className="mt-4 space-y-4">
              {[
                { time: '09:00 AM', patient: 'John Smith', doctor: 'Dr. Williams', type: 'Check-up' },
                { time: '10:30 AM', patient: 'Lisa Anderson', doctor: 'Dr. Martinez', type: 'Follow-up' },
                { time: '02:00 PM', patient: 'Robert Brown', doctor: 'Dr. Thompson', type: 'Consultation' },
              ].map((appointment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                >
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">{appointment.time}</p>
                      <p className="text-gray-500">{appointment.patient}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-medium text-gray-900">{appointment.doctor}</p>
                    <p className="text-gray-500">{appointment.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;