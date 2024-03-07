import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
// import { render } from '@react-email/render';

import * as React from 'react';

export default function MybitstoreOTPEmail() {
  return (
    <Html>
      <Head />
      <Preview>Mybitstore Email Verification</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={imageSection}>
              <Img
                src='https://i.postimg.cc/5N1Kb1ZM/new-mbs-logo.png'
                width='120'
                alt='Mybitstore Logo'
              />
            </Section>
            <Section style={upperSection}>
              <Heading style={h1}>Let's get you signed in!</Heading>
              <Text style={mainText}>
                You&apos;ve requested to sign in to Mybitstore. Please enter the
                following verification code when prompted. If you didn&apos;t
                request this, you can ignore this message. This code will expire
                in 10 minutes.
              </Text>
              <Section style={verificationSection}>
                <Text style={verifyText}>Verification code</Text>
                <Text style={codeText}>596853</Text>
                <Text style={validityText}>
                  This code is only valid for 20 minutes
                </Text>
              </Section>
            </Section>
            <Hr />
            <Section style={lowerSection}>
              <Text style={cautionText}>
                Mybitstore will never email you and ask you to disclose or
                verify your password or banking account number.
              </Text>
            </Section>
          </Section>
          <Text style={footerText}>
            This message was produced and distributed by Mybitstore, Okine
            Avenue - East Legon, Accra. © 2024. All rights reserved. View our{' '}
            <Link
              href='https://www.mybitstore.com/privacy'
              target='_blank'
              style={link}
            >
              privacy policy
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#fff',
  color: '#212121',
};

const container = {
  padding: '20px',
  margin: '0 auto',
  backgroundColor: '#eee',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const imageSection = {
  backgroundColor: '#1D1D31',
  display: 'flex',
  padding: '20px 0',
  alignItems: 'center',
  justifyContent: 'center',
};

const coverSection = { backgroundColor: '#fff' };

const upperSection = { padding: '25px 35px' };

const lowerSection = { padding: '25px 35px' };

const footerText = {
  ...text,
  fontSize: '12px',
  padding: '0 20px',
};

const verifyText = {
  ...text,
  margin: 0,
  fontWeight: 'bold',
  textAlign: 'center' as const,
};

const codeText = {
  ...text,
  backgroundColor: '#eee',
  color: '#212121',
  padding: '15px',
  fontWeight: 'bold',
  fontSize: '36px',
  margin: '10px 0',
  textAlign: 'center' as const,
};

const validityText = {
  ...text,
  margin: '0px',
  fontStyle: 'italic',
  textAlign: 'center' as const,
};

const verificationSection = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const mainText = { ...text, marginBottom: '14px' };

const cautionText = { ...text, margin: '0px' };

// const html = render(<MybitstoreOTPEmail />, {
//   pretty: true,
// });

// console.log('html', html);
