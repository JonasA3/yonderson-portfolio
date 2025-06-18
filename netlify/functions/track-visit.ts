
/* eslint-env node */

import type { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const handler: Handler = async () => {
  try {
    // 1. Get the current count
    const { data: existing, error: readError } = await supabase
      .from('visits')
      .select('count')
      .eq('id', 'total')
      .single();

    if (readError) throw readError;

    const current = existing?.count ?? 0;
    const updated = current + 1;

    // 2. Update the count
    const { error: writeError } = await supabase
      .from('visits')
      .update({ count: updated })
      .eq('id', 'total');

    if (writeError) throw writeError;

    return {
      statusCode: 200,
      body: JSON.stringify({ count: updated }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: (err as Error).message }),
    };
  }
};
