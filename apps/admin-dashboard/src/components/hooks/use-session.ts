import React from 'react';
import Session from '../contexts/session';

export default function useSession() {
  const context = React.useContext(Session);

  if (typeof context === 'undefined') {
    throw new Error('useSession must be used within a SessionProvider');
  }

  return context;
}
