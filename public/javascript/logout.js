async function logout() {
    const res = await fetch('/api/user/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      document.location.replace('/');
    } else {
      alert(res.statusText);
    }
  }

  document.querySelector('.logout').addEventListener('click', logout);
