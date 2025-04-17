'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('Biology');
  const [gender, setGender] = useState('Male');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!name || !title) return alert('Please fill out all fields.');
    setLoading(true);
    const params = new URLSearchParams({ name, title, subject, gender });
    router.replace(`/thankyou?${params.toString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Farewell Appreciation</h1>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-2 bg-gray-900 border border-gray-700 text-white rounded-lg placeholder-gray-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Title (e.g., Most Supportive Teacher)"
          className="w-full mb-4 p-2 bg-gray-900 border border-gray-700 text-white rounded-lg placeholder-gray-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select name='Gender' title='Gender'
          className="w-full mb-4 p-2 bg-gray-900 border border-gray-700 text-white rounded-lg"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male (Sir)</option>
          <option value="Female">Female (Miss)</option>
        </select>

        <select name='Subjects' title='Subjects'
          className="w-full mb-4 p-2 bg-gray-900 border border-gray-700 text-white rounded-lg"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          {["Biology", "Computer", "Chemistry", "English", "Urdu", "Islamiyat", "Physics", "Maths", "Sindhi", "PakistanStudies"].map((sub) => (
            <option key={sub} value={sub}>{sub}</option>
          ))}
        </select>

        <button
          className={`w-full bg-purple-700 text-white p-2 rounded-lg transition-colors duration-200 hover:bg-purple-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}