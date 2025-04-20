'use client';

import { useState } from 'react';
import { convertUrl } from '@/features/convert/actions/convertUrl';
import { validateUrl } from '@/shared/utils/validateUrl';

export default function UrlForm() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateUrl(url)) {
      setError('Please enter a valid URL.');
      return;
    }

    try {
      setLoading(true);
      const { pdfUrl } = await convertUrl(url);
      window.location.href = pdfUrl; // download
    } catch (err) {
      setError('Failed to generate PDF. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter a URL..."
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white text-gray-700  py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white transition"
      >
        {loading ? 'Generating…' : 'Generate PDF'}
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
}
