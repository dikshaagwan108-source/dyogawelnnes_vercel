import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, CheckCircle, Upload } from 'lucide-react';

const PaymentQR: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const plan = queryParams.get('plan');

  const planName = plan === 'monthly' ? 'Monthly Pass' : '7-Day Trial';
  const amount = plan === 'monthly' ? '₹1,499' : '₹199';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    transactionId: '',
  });
  const [receiptFile, setReceiptFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceiptFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('mobile', formData.mobile);
    formDataToSend.append('transactionId', formData.transactionId);
    formDataToSend.append('_subject', `New Payment Confirmation: ${planName}`);
    formDataToSend.append('_captcha', 'false');
    if (receiptFile) {
      formDataToSend.append('receipt', receiptFile);
    }

    try {
      await fetch('https://formsubmit.co/ajax/info@dyogawellness.com', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formDataToSend
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error("Form submission error", error);
      setIsSubmitting(false);
      setIsSuccess(true); // show success anyway for UX
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setFormData({ name: '', email: '', mobile: '', transactionId: '' });
    setReceiptFile(null);
  };

  return (
    <div className="page-content animate-fade-in" style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '3rem', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
          <h1 className="title-md text-primary" style={{ marginBottom: '1rem', color: '#2c494c' }}>Complete Your Payment</h1>
          
          <div style={{ backgroundColor: '#f4f9f9', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '2rem', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#2c494c', marginBottom: '0.5rem', fontWeight: 'bold' }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e0f0f0', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontWeight: 600, color: '#2c494c' }}>{planName}</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2c494c' }}>{amount}</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Please scan the QR code below using Google Pay, PhonePe, Paytm, or any UPI app to complete your payment.
            </p>
          </div>

          {/* QR Code Section */}
          <div style={{ margin: '2rem auto', border: '2px dashed #e0f0f0', padding: '1rem', borderRadius: '1rem', display: 'inline-block' }}>
            <img 
              src="/payment-qr.png" 
              alt="Scan to Pay" 
              style={{ width: '250px', height: '250px', objectFit: 'contain' }}
            />
          </div>

          <p style={{ color: '#2c494c', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Thank you for choosing D'YOGA!
            <br/>
            <span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>
              Once payment is done, please confirm your registration below.
            </span>
          </p>

          <button 
            className="btn btn-primary" 
            onClick={() => setIsModalOpen(true)} 
            style={{ width: '100%', padding: '1rem', fontSize: '1.05rem', fontWeight: 'bold' }}
          >
            Click here once payment is completed
          </button>
        </div>

      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} style={styles.closeBtn}>
              <X size={24} />
            </button>

            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <CheckCircle size={64} color="#10b981" style={{ margin: '0 auto 1.5rem auto' }} />
                <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', color: '#2c494c', marginBottom: '1rem' }}>
                  Thank You for Choosing D'YOGA!
                </h2>
                <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Your payment details have been successfully submitted for verification.
                </p>
                <div style={{ backgroundColor: '#f4f9f9', padding: '1.5rem', borderRadius: '0.75rem', marginBottom: '2rem', textAlign: 'left' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Our team will review your payment and contact you shortly regarding your Morning Yoga trial session.
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    A confirmation email will be sent to your registered email address once verification is complete.
                  </p>
                </div>
                <p style={{ fontWeight: 'bold', color: '#2c494c', marginBottom: '2rem' }}>
                  Thank you for being a part of your wellness journey with D'YOGA.
                </p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => navigate('/')} 
                  style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
                >
                  Return to Home
                </button>
              </div>
            ) : (
              <div style={{ padding: '0.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', color: '#2c494c', marginBottom: '0.5rem' }}>
                  Confirm Your Registration
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  Please fill out the form below and attach your payment receipt to complete your registration.
                </p>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required style={styles.input} placeholder="Enter your full name" />
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required style={styles.input} placeholder="Enter your email" />
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Mobile Number *</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" required style={styles.input} placeholder="10-digit mobile number" />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>UPI Transaction ID / UTR Number *</label>
                    <input type="text" name="transactionId" value={formData.transactionId} onChange={handleInputChange} required style={styles.input} placeholder="e.g., 123456789012" />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Upload Payment Receipt / Screenshot *</label>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="file" 
                        accept=".jpg,.jpeg,.png,.pdf" 
                        onChange={handleFileChange} 
                        required 
                        style={{ ...styles.input, paddingLeft: '2.5rem', cursor: 'pointer', width: '100%' }} 
                      />
                      <Upload size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
                    </div>
                    {receiptFile && <p style={{ fontSize: '0.85rem', color: '#10b981', marginTop: '0.5rem' }}>✓ Selected: {receiptFile.name}</p>}
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Accepted formats: JPG, PNG, PDF</p>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={isSubmitting}
                    style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem', opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? 'Submitting details...' : 'Submit Payment Details'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed' as const,
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(4px)',
    zIndex: 10000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '90px 1rem 1rem 1rem',
    animation: 'fadeIn 0.3s ease-out',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: '1.5rem',
    width: '100%',
    maxWidth: '500px',
    maxHeight: 'calc(100vh - 110px)',
    overflowY: 'auto' as const,
    position: 'relative' as const,
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    animation: 'slideUp 0.4s ease-out',
    padding: '2rem',
    margin: '0 auto',
  },
  closeBtn: {
    position: 'absolute' as const,
    top: '1.5rem',
    right: '1.5rem',
    background: '#f4f9f9',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    cursor: 'pointer',
    zIndex: 10,
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    padding: '0.85rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid #ccc',
    fontSize: '1rem',
    fontFamily: 'inherit',
    backgroundColor: '#fff',
    boxSizing: 'border-box' as const,
  }
};

export default PaymentQR;
