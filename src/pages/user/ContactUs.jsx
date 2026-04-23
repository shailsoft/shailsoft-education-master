import { useState } from 'react';
import PageBanner from '../../components/common/PageBanner.jsx';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <PageBanner title="Contact us" crumbs={[{ label: 'Contact us' }]} />

      <section>
        <div className="container com-sp pad-bot-70">
          <div className="row">
            <div className="col-md-4">
              <div className="con-info">
                <h4>Address</h4>
                <p>28800 Orchard Lake Road, Suite 180<br />Farmington Hills, U.S.A.</p>
              </div>
              <div className="con-info">
                <h4>Phone</h4>
                <p>+101-1231-4321</p>
              </div>
              <div className="con-info">
                <h4>Email</h4>
                <p>info@edu.com</p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="con-form">
                <h3>Send us a message</h3>
                {submitted && (
                  <div className="alert alert-success" style={{ padding: '10px', background: '#dff0d8', color: '#3c763d', borderRadius: 4 }}>
                    Thank you! We'll get back to you shortly.
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 input-field">
                      <input required type="text" value={form.name} onChange={update('name')} />
                      <label>Your name</label>
                    </div>
                    <div className="col-md-6 input-field">
                      <input required type="email" value={form.email} onChange={update('email')} />
                      <label>Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 input-field">
                      <input type="tel" value={form.phone} onChange={update('phone')} />
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6 input-field">
                      <input type="text" value={form.subject} onChange={update('subject')} />
                      <label>Subject</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 input-field">
                      <textarea required value={form.message} onChange={update('message')} rows={6} className="materialize-textarea" />
                      <label>Message</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <input type="submit" value="Send Message" className="waves-effect waves-light log-in-btn" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
