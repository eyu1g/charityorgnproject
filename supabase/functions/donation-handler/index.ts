import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.52.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { 
      donor_name, 
      donor_email, 
      amount, 
      currency = 'USD',
      payment_method,
      payment_id,
      message,
      anonymous = false,
      project_id 
    } = await req.json();

    // Validate required fields
    if (!donor_name || !donor_email || !amount || amount <= 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid donation data' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert donation record
    const { data, error } = await supabase
      .from('donations')
      .insert({
        donor_name,
        donor_email,
        amount: parseFloat(amount),
        currency,
        payment_method,
        payment_id,
        message: message || null,
        anonymous,
        project_id: project_id || null,
        status: 'pending'
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting donation:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to process donation' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Donation processed successfully:', data.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        donation_id: data.id,
        message: 'Donation processed successfully'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Donation handler error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});