import type { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const handler: Handler = async () => {
  try {
    const { data, error } = await supabase
      .from('visits')
      .select('count')
      .eq('id', 'total')
      .single();

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify({ count: data?.count ?? 0 }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: (err as Error).message }),
    };
  }
};
