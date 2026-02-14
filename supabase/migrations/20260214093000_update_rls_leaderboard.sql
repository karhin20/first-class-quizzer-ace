-- Allow all authenticated users to view all profiles (needed for leaderboard names)
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Authenticated users can view all profiles" 
ON public.profiles FOR SELECT 
TO authenticated 
USING (true);

-- Allow all authenticated users to view all test results (needed for leaderboard scores)
DROP POLICY IF EXISTS "Admins can view all results" ON public.test_results;
CREATE POLICY "Authenticated users can view all results" 
ON public.test_results FOR SELECT 
TO authenticated 
USING (true);
