import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft } from 'lucide-react';

interface AdminResult {
  id: string;
  test_name: string;
  score: number;
  total_questions: number;
  completed_at: string;
  student_name: string;
  student_email: string;
}

const AdminResults = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const [results, setResults] = useState<AdminResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/');
      return;
    }
    const fetchResults = async () => {
      // Fetch test results
      const { data: testData, error: testError } = await supabase
        .from('test_results')
        .select('*')
        .order('completed_at', { ascending: false });

      if (testError || !testData) {
        setLoading(false);
        return;
      }

      // Fetch profiles for student names
      const userIds = [...new Set(testData.map((r: any) => r.user_id))];
      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, name, email')
        .in('user_id', userIds);

      const profileMap = new Map((profiles || []).map((p: any) => [p.user_id, p]));

      const combined: AdminResult[] = testData.map((r: any) => {
        const profile = profileMap.get(r.user_id);
        return {
          id: r.id,
          test_name: r.test_name,
          score: r.score,
          total_questions: r.total_questions,
          completed_at: r.completed_at,
          student_name: profile?.name || 'Unknown',
          student_email: profile?.email || '',
        };
      });

      setResults(combined);
      setLoading(false);
    };
    fetchResults();
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Button variant="outline" onClick={() => navigate('/')} className="mb-6 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Tests
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">All Student Results (Admin)</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-muted-foreground">Loading results...</p>
            ) : results.length === 0 ? (
              <p className="text-muted-foreground">No test results yet.</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Test</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Percentage</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell className="font-medium">{r.student_name}</TableCell>
                      <TableCell className="text-muted-foreground">{r.student_email}</TableCell>
                      <TableCell>{r.test_name}</TableCell>
                      <TableCell>{r.score}/{r.total_questions}</TableCell>
                      <TableCell>{Math.round((r.score / r.total_questions) * 100)}%</TableCell>
                      <TableCell>{new Date(r.completed_at).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminResults;
