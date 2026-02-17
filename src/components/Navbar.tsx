import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { LogOut, ClipboardList, Shield } from 'lucide-react';

const Navbar = () => {
  const { user, isAdmin, signOut, loading } = useAuth();

  if (loading) return null;

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-foreground">
          ADJ Test
        </Link>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {isAdmin && (
                <Link to="/admin/results">
                  <Button variant="outline" size="sm" className="flex items-center gap-1.5">
                    <Shield className="h-4 w-4" /> Admin Results
                  </Button>
                </Link>
              )}
              <Link to="/my-results">
                <Button variant="outline" size="sm" className="flex items-center gap-1.5">
                  <ClipboardList className="h-4 w-4" /> My Results
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={signOut} className="flex items-center gap-1.5">
                <LogOut className="h-4 w-4" /> Logout
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button size="sm">Login / Sign Up</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
