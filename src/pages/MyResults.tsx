import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft } from 'lucide-react';

interface TestResult {
  id: string;
  test_id: string;
  test_name: string;
  score: number;
  total_questions: number;
  completed_at: string;
}

const MyResults = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [results, setResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchResults = async () => {
      const { data, error } = await supabase
        .from('test_results')
        .select('*')
        .eq('user_id', user.id)
        .order('completed_at', { ascending: false });
      if (!error && data) setResults(data as TestResult[]);
      setLoading(false);
    };
    fetchResults();
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Button variant="outline" onClick={() => navigate('/')} className="mb-6 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Tests
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">My Test Results</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-muted-foreground">Loading results...</p>
            ) : results.length === 0 ? (
              <p className="text-muted-foreground">You haven't completed any tests yet.</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Test</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Percentage</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell className="font-medium">{r.test_name}</TableCell>
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

export default MyResults;
