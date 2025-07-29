// helpers/apiLogin.js
async function apiLogin(request, email, password) {
  const response = await request.post('/api/auth/login', {
    data: {
      email,
      password
    }
  });

  if (response.ok()) {
    const body = await response.json();
    return body.token; // <-- це має бути рядок, наприклад "eyJhbGciOiJIUzI1NiIsInR..."
  } else {
    throw new Error(`Login failed: ${response.status()} ${response.statusText()}`);
  }
}

module.exports = { apiLogin };