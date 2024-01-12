import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission. For example, send formData to your API.
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}