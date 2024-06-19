import { Suspense } from 'react';
import LoginComponent from '@/components/Logincomponents.jsx'; // Adjust the import according to your structure

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginComponent />
    </Suspense>
  );
}
