const SUPABASE_URL = 'https://zyjkrjktzmipbnbpnhsl.supabase.co';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5amtyamt0em1pcGJuYnBuaHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTExNjYsImV4cCI6MjA2OTk4NzE2Nn0.neKTy97yIXL1aHJFmLCGbqg-DeHR9UszSbxHzZQsqpQ';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById("SignUpButton").onclick = async () => {
    
  const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const { error } = await supabaseClient.auth.signUp({ email, password });
    
    if (error) {
      alert(error.message);
    } 

    else {
     alert("Check your email to confirm signup!");
     window.location.href = "/login";
    }
  };