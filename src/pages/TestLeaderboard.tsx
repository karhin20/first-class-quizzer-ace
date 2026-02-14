import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { getSubjectById } from '@/data/questions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Trophy } from 'lucide-react';

interface LeaderboardEntry {
    id: string;
    score: number;
    total_questions: number;
    completed_at: string;
    profiles: {
        name: string;
    };
}

const TestLeaderboard = () => {
    const { subjectId } = useParams<{ subjectId: string }>();
    const navigate = useNavigate();
    const subject = getSubjectById(subjectId || '');
    const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!subject) return;

        const fetchLeaderboard = async () => {
            const { data, error } = await supabase
                .from('test_results')
                .select(`
          id,
          score,
          total_questions,
          completed_at,
          profiles (
            name
          )
        `)
                .eq('test_id', subject.id)
                .order('score', { ascending: false })
                .limit(50);

            if (!error && data) {
                // Transform data to match interface if necessary, though Supabase returns nested objects
                setEntries(data as any);
            }
            setLoading(false);
        };

        fetchLeaderboard();
    }, [subject]);

    if (!subject) {
        return <div>Subject not found</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <Button variant="ghost" onClick={() => navigate('/')} className="mb-6 flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> Back to Tests
                </Button>

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{subject.name} Leaderboard</h1>
                    <p className="text-gray-600">Top scores for this test</p>
                </div>

                <Card className="border-t-4 border-t-yellow-400 shadow-lg">
                    <CardHeader className="bg-yellow-50/50 pb-2">
                        <CardTitle className="flex items-center gap-2 text-xl text-yellow-800">
                            <Trophy className="h-6 w-6 text-yellow-500" />
                            Hall of Fame
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <div className="text-center py-8">Loading scores...</div>
                        ) : entries.length === 0 ? (
                            <div className="text-center py-12 text-gray-500">
                                No results yet. Be the first to take this test!
                            </div>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Rank</TableHead>
                                        <TableHead>Student</TableHead>
                                        <TableHead className="text-right">Score</TableHead>
                                        <TableHead className="text-right hidden sm:table-cell">Date</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {entries.map((entry, index) => (
                                        <TableRow key={entry.id} className={index < 3 ? 'bg-yellow-50/30' : ''}>
                                            <TableCell className="font-medium">
                                                <div className="flex items-center gap-2">
                                                    {index === 0 && <span className="text-2xl">🥇</span>}
                                                    {index === 1 && <span className="text-2xl">🥈</span>}
                                                    {index === 2 && <span className="text-2xl">🥉</span>}
                                                    <span className={index < 3 ? 'font-bold text-gray-900' : 'text-gray-500'}>
                                                        #{index + 1}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="font-medium text-gray-900">
                                                {entry.profiles?.name || 'Anonymous'}
                                            </TableCell>
                                            <TableCell className="text-right font-bold">
                                                {entry.score} / {entry.total_questions}
                                                <span className="text-xs text-gray-500 block font-normal">
                                                    {Math.round((entry.score / entry.total_questions) * 100)}%
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right text-gray-500 hidden sm:table-cell">
                                                {new Date(entry.completed_at).toLocaleDateString()}
                                            </TableCell>
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

export default TestLeaderboard;
