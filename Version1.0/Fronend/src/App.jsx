import React, { useState } from 'react';

const NexxusLogin = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showCreateAccountPopup, setShowCreateAccountPopup] = useState(false);
    const [showCreateAccountDetailsPopup, setShowCreateAccountDetailsPopup] = useState(false);
    const [showPasswordCreationPopup, setShowPasswordCreationPopup] = useState(false);

    const styles = {
        container: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'black',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            position: 'relative',
            overflow: 'hidden',
        },
        main: {
            flex: 1,
            display: 'flex',
        },
        leftHalf: {
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        rightHalf: {
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '18rem',
        },
        logo: {
            marginLeft: '18rem',
            fontSize: '10rem',
            fontWeight: 'bold',
            letterSpacing: '-0.05em'
        },
        content: {
            maxWidth: '380px',
            width: '100%',
        },
        title: {
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
        },
        subtitle: {
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
        },
        button: {
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            border: 'none',
            marginBottom: '1rem',
        },
        googleButton: {
            backgroundColor: 'white',
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        createAccountButton: {
            backgroundColor: '#1d9bf0',
            color: 'white',
        },
        signInButton: {
            backgroundColor: 'transparent',
            color: '#1d9bf0',
            border: '1px solid #536471',
        },
        termsText: {
            fontSize: '0.75rem',
            color: '#536471',
            marginBottom: '1rem',
        },
        footer: {
            padding: '1rem',
            fontSize: '0.75rem',
            color: '#536471',
        },
        footerNav: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
        },
        footerLink: {
            color: '#536471',
            textDecoration: 'none',
        },
        backdrop: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            margin: 0,
            padding: 0,
        },
        popup: {
            backgroundColor: 'black',
            borderRadius: '16px',
            padding: '2rem',
            width: '100%',
            maxWidth: '440px',
            position: 'relative',
        },
        closeButton: {
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
        },
        popupLogo: {
            width: '40px',
            height: '40px',
            margin: '0 auto 1rem',
        },
        popupTitle: {
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '1.5rem',
        },
        input: {
            width: '93%',
            padding: '0.75rem',
            borderRadius: '4px',
            border: '2px solid #333',
            backgroundColor: 'black',
            color: 'white',
            marginBottom: '1rem',
            transition: 'border-color 0.3s ease',
        },
        nextButton: {
            width: '100%',
            padding: '0.75rem',
            borderRadius: '9999px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: 'white',
            color: 'black',
            marginBottom: '1rem',
        },
        forgotPassword: {
            width: '100%',
            padding: '0.75rem',
            borderRadius: '9999px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid #333',
        },
        signUpText: {
            textAlign: 'center',
            marginTop: '1rem',
        },
        signUpLink: {
            color: '#1d9bf0',
            textDecoration: 'none',
        },
        dateOfBirthContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
        },
        dateSelect: {
            backgroundColor: 'black',
            color: 'white',
            border: '1px solid #333',
            borderRadius: '4px',
            padding: '0.5rem',
        },
        useEmailLink: {
            color: '#1d9bf0',
            textDecoration: 'none',
            fontSize: '0.9rem',
            marginBottom: '1rem',
            display: 'block',
        },
        dateOfBirthText: {
            fontSize: '0.9rem',
            color: '#6e767d',
            marginBottom: '0.1rem',
        },
        backgroundImage: {
            position: 'flex',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
        },
        global: {
            body: {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
            },
            html: {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
            },
        },
    };

    // Apply global styles
    const applyGlobalStyles = () => {
        Object.keys(styles.global).forEach((element) => {
            const style = styles.global[element];
            Object.assign(document.querySelector(element).style, style);
        });
    };

    applyGlobalStyles();

    const SignInPopup = ({ onClose }) => {
        const [inputFocused, setInputFocused] = useState(false);
        const [showPasswordStep, setShowPasswordStep] = useState(false);
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [showPassword, setShowPassword] = useState(false);

        return (
            <div style={styles.backdrop} onClick={onClose}>
                <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
                    <button style={styles.closeButton} onClick={onClose}>×</button>
                    <div style={styles.popupLogo}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="white">
                            <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                        </svg>
                    </div>
                    <h2 style={styles.popupTitle}>
                        {showPasswordStep ? 'Enter your password' : 'Sign in to NEXXUS'}
                    </h2>
                    {!showPasswordStep ? (
                        <input
                            type="text"
                            placeholder="Phone, email, or username"
                            style={{
                                ...styles.input,
                                borderColor: inputFocused ? '#1d9bf0' : '#333',
                                outline: 'none',
                            }}
                            onFocus={() => setInputFocused(true)}
                            onBlur={() => setInputFocused(false)}
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                    ) : (
                        <div>
                            <input
                                type="text"
                                value={username}
                                disabled
                                style={{
                                    ...styles.input,
                                    backgroundColor: '#333',
                                    color: '#888',
                                    marginBottom: '0.5rem'
                                }}
                            />
                            <div style={{ position: 'relative' }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    style={{
                                        ...styles.input,
                                        borderColor: inputFocused ? '#1d9bf0' : '#333',
                                        outline: 'none',
                                        paddingRight: '0.7rem'
                                    }}
                                    onFocus={() => setInputFocused(true)}
                                    onBlur={() => setInputFocused(false)}
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '0.5rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'none',
                                        border: 'none',
                                        color: '#1d9bf0',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>
                    )}
                    <button
                        style={styles.nextButton}
                        onClick={() => {
                            if (!showPasswordStep) {
                                setShowPasswordStep(true);
                            } else {
                                console.log('Logging in with:', username, password);
                                onClose();
                            }
                        }}
                    >
                        {showPasswordStep ? 'Log In' : 'Next'}
                    </button>
                    <button style={styles.forgotPassword}>Forgot password?</button>
                    <p style={styles.signUpText}>
                        Don't have an account? <a href="#" style={styles.signUpLink} onClick={() => {
                            onClose();
                            setShowCreateAccountPopup(true);
                        }}>Sign up</a>
                    </p>
                </div>
            </div>
        );
    };

    const CreateAccountPopup = ({ onClose }) => {
        return (
            <div style={styles.backdrop} onClick={onClose}>
                <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
                    <button style={styles.closeButton} onClick={onClose}>×</button>
                    <div style={styles.popupLogo}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="white">
                            <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                        </svg>
                    </div>
                    <h2 style={styles.popupTitle}>Join NEXXUS today</h2>
                    <button style={{ ...styles.button, ...styles.googleButton }}>
                        <svg viewBox="0 0 24 24" width="24" height="24" style={{ marginRight: '0.5rem' }}>
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1  7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Sign up with Google
                    </button>
                    <div style={{ textAlign: 'center', margin: '1rem 0' }}>or</div>
                    <button
                        style={styles.nextButton}
                        onClick={() => {
                            onClose();
                            setShowCreateAccountDetailsPopup(true);
                        }}
                    >
                        Create account
                    </button>
                    <p style={styles.termsText}>
                        By signing up, you agree to the <a href="#" style={styles.signUpLink}>Terms of Service</a> and <a href="#" style={styles.signUpLink}>Privacy Policy</a>, including <a href="#" style={styles.signUpLink}>Cookie Use</a>.
                    </p>
                    <p style={styles.signUpText}>
                        Have an account already? <a href="#" style={styles.signUpLink} onClick={() => {
                            onClose();
                            setShowPopup(true)
                        }}>Log in</a>
                    </p>
                </div>
            </div>
        );
    };

    const CreateAccountDetailsPopup = ({ onClose }) => {
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
        const [useEmail, setUseEmail] = useState(false);
        const [month, setMonth] = useState('');
        const [day, setDay] = useState('');
        const [year, setYear] = useState('');
        const [phoneError, setPhoneError] = useState(null);

        const handlePhoneChange = (e) => {
            const phoneRegex = /^\d{10}$/; // 10 digit Indian phone number
            if (phoneRegex.test(e.target.value)) {
                setPhoneError(null);
            } else {
                setPhoneError('Please enter a valid 10-digit Indian phone number');
            }
            setPhone(e.target.value);
        };

        return (
            <div style={styles.backdrop} onClick={onClose}>
                <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
                    <button style={styles.closeButton} onClick={onClose}>×</button>
                    <div style={styles.popupLogo}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="white">
                            <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                        </svg>
                    </div>
                    <h2 style={styles.popupTitle}>Create your account</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        style={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type={useEmail ? 'email' : 'tel'}
                        placeholder={useEmail ? 'example@gmail.com' : 'Phone (10-digit Indian number)'}
                        style={styles.input}
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                    {phoneError && (
                        <p style={{ color: 'red', fontSize: '12px' }}>{phoneError}</p>
                    )}
                    <a
                        href="#"
                        style={styles.useEmailLink}
                        onClick={(e) => {
                            e.preventDefault();
                            setUseEmail(!useEmail);
                        }}
                    >
                        {useEmail ? "Use phone instead" : "Use email instead"}
                    </a>
                    <p style={styles.dateOfBirthText}>Date of Birth</p>
                    <p style={{ ...styles.dateOfBirthText, marginBottom: '1rem' }}>
                        This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                    </p>
                    <div style={styles.dateOfBirthContainer}>
                        <select
                            style={{ ...styles.dateSelect, width: '45%' }}
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                        >
                            <option value="">Month</option>
                            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m, index) => (
                                <option key={index} value={m}>{m}</option>
                            ))}
                        </select>
                        <select
                            style={{ ...styles.dateSelect, width: '25%' }}
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        >
                            <option value="">Day</option>
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                        <select
                            style={{ ...styles.dateSelect, width: '25%' }}
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <option value="">Year</option>
                            {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(y => (
                                <option key={y} value={y}>{y}</option>
                            ))}
                        </select>
                    </div>
                    <button 
                        style={styles.nextButton}
                        onClick={() => {
                            onClose();
                            setShowPasswordCreationPopup(true);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    };

    const PasswordCreationPopup = ({ onClose }) => {
        const [password, setPassword] = useState('');
        const [showPassword, setShowPassword] = useState(false);
        const [passwordError, setPasswordError] = useState(null);

        const handlePasswordChange = (e) => {
            const newPassword = e.target.value;
            setPassword(newPassword);
            if (newPassword.length < 8) {
                setPasswordError('Password must be at least 8 characters long');
            } else {
                setPasswordError(null);
            }
        };

        return (
            <div style={styles.backdrop} onClick={onClose}>
                <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
                    <button style={styles.closeButton} onClick={onClose}>×</button>
                    <div style={styles.popupLogo}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="white">
                            <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                        </svg>
                    </div>
                    <h2 style={styles.popupTitle}>You'll need a password</h2>
                    <p style={{ ...styles.dateOfBirthText, marginBottom: '1rem' }}>
                        Make sure it's 8 characters or more
                    </p>
                    <div style={{ position: 'relative' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            style={{
                                ...styles.input,
                                paddingRight: '2.5rem'
                            }}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                position: 'absolute',
                                right: '0.5rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                color: '#1d9bf0',
                                cursor: 'pointer',
                            }}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    {passwordError && (
                        <p style={{ color: 'red', fontSize: '12px' }}>{passwordError}</p>
                    )}
                    <p style={{ ...styles.termsText, marginTop: '1rem' }}>
                        By signing up, you agree to the <a href="#" style={styles.signUpLink}>Terms of Service</a> and <a href="#" style={styles.signUpLink}>Privacy Policy</a>, including <a href="#" style={styles.signUpLink}>Cookie Use</a>. NEXXUS may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <a href="#" style={styles.signUpLink}>Learn more</a>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <a href="#" style={styles.signUpLink}>here</a>.
                    </p>
                    <button 
                        style={{...styles.nextButton, backgroundColor: password.length >= 8 ? '#1d9bf0' : '#333'}}
                        disabled={password.length < 8}
                        onClick={() => {
                            if (password.length >= 8) {
                                console.log('Account created with password:', password);
                                onClose();
                            }
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div style={styles.container}>
            <div style={styles.backgroundImage} />
            <main style={styles.main}>
                <div style={styles.leftHalf}>
                    <h1 style={styles.logo}>NEXXUS</h1>
                </div>
                <div style={styles.rightHalf}>
                    <div style={styles.content}>
                        <h2 style={styles.title}>Happening now</h2>
                        <h3 style={styles.subtitle}>Join today.</h3>
                        <button style={{ ...styles.button, ...styles.googleButton }}>
                            <svg viewBox="0 0 24 24" width="24" height="24" style={{ marginRight: '0.5rem' }}>
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Sign in as Roni
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.createAccountButton }}
                            onClick={() => setShowCreateAccountPopup(true)}
                        >
                            Create account
                        </button>
                        <p style={styles.termsText}>
                            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                        </p>
                        <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Already have an account?</p>
                        <button
                            style={{ ...styles.button, ...styles.signInButton }}
                            onClick={() => setShowPopup(true)}
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </main>
            <footer style={styles.footer}>
                <nav style={styles.footerNav}>
                    {['About', 'Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Ads info', 'Blog', 'Status', 'Careers', 'Brand Resources', 'Advertising', 'Marketing', 'Twitter for Business', 'Developers', 'Directory', 'Settings'].map((link, index) => (
                        <a key={index} href="#" style={styles.footerLink}>{link}</a>
                    ))}
                    <span>© 2021 Twitter, Inc.</span>
                </nav>
            </footer>
            {showPopup && <SignInPopup onClose={() => setShowPopup(false)} />}
            {showCreateAccountPopup && <CreateAccountPopup onClose={() => setShowCreateAccountPopup(false)} />}
            {showCreateAccountDetailsPopup && <CreateAccountDetailsPopup onClose={() => setShowCreateAccountDetailsPopup(false)} />}
            {showPasswordCreationPopup && <PasswordCreationPopup onClose={() => setShowPasswordCreationPopup(false)} />}
        </div>
    );
};

export default NexxusLogin;